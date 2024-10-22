import { useUser } from "@/context/userProvider";
import useCreateCommentMutation from "@/hooks/comment/useCreateCommentMutation";
import useUpdateCommentMutation from "@/hooks/comment/useUpdateCommentMutation"; // Import the update mutation
import { Send } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";

interface CommentFormValues {
  content: string;
  postId: string | undefined;
  userId: string | undefined;
}

const CommentForm = ({
  postId,
  userId,
  updateCommentData,
  setUpdateCommentData,
}: {
  postId: string | undefined;
  userId: string | undefined;
  updateCommentData: {
    updateMode: boolean;
    commentId?: string; // Add commentId for updating
    comment?: string;
  };
  setUpdateCommentData: any;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue, // Used to prepopulate input
    formState: { errors },
  } = useForm<CommentFormValues>();

  const { mutate: createComment } = useCreateCommentMutation(postId as string);
  const { mutate: updateComment } = useUpdateCommentMutation(
    updateCommentData.commentId as string // Pass the commentId for updating
  );
  const { user } = useUser();

  // Prepopulate the input field if we are in update mode
  if (updateCommentData.updateMode && updateCommentData.comment) {
    setValue("content", updateCommentData.comment);
  }

  // Handle form submission
  const onSubmit = (data: CommentFormValues) => {
    if (updateCommentData.updateMode && updateCommentData.commentId) {
      // Handle comment update logic
      updateComment(
        { content: data.content },
        {
          onSuccess: () => {
            // Set update mode to false and clear input field
            setUpdateCommentData({ updateMode: false });
            reset(); // Reset form after submission
          },
        }
      );
    } else {
      // Handle new comment creation
      createComment({
        postId: postId as string,
        author: userId as string,
        content: data.content,
      });
      reset(); // Reset form after submission
    }
  };

  return (
    <form
      className="flex items-center gap-x-3 justify-between"
      onSubmit={handleSubmit(onSubmit)} // Bind form submission
    >
      <Image
        src={user?.profileImage || "/icons/avatar.png"}
        width={56}
        height={56}
        alt="user avatar"
        className="rounded-full size-10"
      />
      <div className="w-full">
        <input
          type="text"
          placeholder="Write a comment..."
          className="input-style bg-[#eff2f6] focus:bg-white transition-colors w-full"
          {...register("content", { required: "Comment is required" })} // Register input field with validation
        />
        {/* Error handling */}
        {errors.content && (
          <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
        )}
      </div>
      <button type="submit">
        <Send size={28} />
      </button>
    </form>
  );
};

export default CommentForm;

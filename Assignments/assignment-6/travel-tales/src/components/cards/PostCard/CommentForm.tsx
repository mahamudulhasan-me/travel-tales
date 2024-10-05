import useCreateCommentMutation from "@/hooks/comment/useCreateCommentMutation";
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
}: {
  postId: string | undefined;
  userId: string | undefined;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommentFormValues>();

  const { mutate: createComment, isPending } = useCreateCommentMutation(
    postId as string
  );

  // Handle form submission
  const onSubmit = (data: CommentFormValues) => {
    console.log("Submitted comment:", data.content);
    createComment({
      postId: postId as string,
      author: userId as string,
      content: data.content,
    });
    reset();
  };

  return (
    <>
      {" "}
      <form
        className="flex items-center gap-x-3 justify-between"
        onSubmit={handleSubmit(onSubmit)} // Bind form submission
      >
        <Image
          src="/icons/avatar.png"
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
            <p className="text-red-500 text-sm mt-1">
              {errors.content.message}
            </p>
          )}
        </div>
        <button type="submit">
          <Send size={28} />
        </button>
      </form>
    </>
  );
};

export default CommentForm;

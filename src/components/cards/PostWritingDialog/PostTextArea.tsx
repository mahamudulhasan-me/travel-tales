"use client";

import { useDialog } from "@/components/core/Dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Loader from "@/components/ui/Loader";
import envConfig from "@/config/envConfig";
import { postCategories } from "@/const/postCategories";
import { useUser } from "@/context/userProvider";
import useCreatePost from "@/hooks/post/useCreatePost";
import { IPostCreate } from "@/type/post";
import "quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import { toast } from "sonner";

// Define a custom toolbar with the desired options
const toolbarOptions = [
  [{ header: [1, 2, false] }],
  ["bold", "italic", "underline"],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }],
  ["clean"], // remove formatting button
];

const PostTextArea = (): JSX.Element => {
  const { user } = useUser();
  const { setIsOpen } = useDialog();
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState<string>("");
  const [isPremium, setIsPremium] = useState<boolean>(false);
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: toolbarOptions, // Set the custom toolbar here
    },
  });

  const [editorContent, setEditorContent] = useState<string>("");
  const [imageFiles, setImageFiles] = useState<File[]>([]); // State for storing image files

  const {
    mutate: createPost,

    isSuccess,
  } = useCreatePost();

  useEffect(() => {
    if (quill) {
      // Listen for changes in the editor
      quill.on("text-change", () => {
        // Get the content of the editor in HTML format
        setEditorContent(quill.root.innerHTML);
      });
    }
  }, [quill]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first selected file
    if (file) {
      setImageFiles([file]); // Store the single selected file in state
    }
  };

  // Upload images to ImageBB and return their URLs
  const uploadImages = async (): Promise<string[]> => {
    const uploadedImageUrls: string[] = [];

    const uploadPromises = imageFiles.map(async (file) => {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=${envConfig.imagebbApiKey}`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();

        if (data.success) {
          uploadedImageUrls.push(data.data.url); // Store the uploaded image URL
        } else {
          console.error("Image upload error:", data.error); // Log the error response
        }
      } catch (error) {
        console.error("Fetch error:", error); // Log any fetch errors
      }
    });

    await Promise.all(uploadPromises);
    return uploadedImageUrls; // Return the uploaded image URLs
  };

  const handlePost = async () => {
    if (!category) {
      toast.warning("Post category required!");
      return;
    }
    if (!editorContent) {
      toast.error("Please write something");
      return;
    }
    setIsLoading(true);
    const imageUrls = await uploadImages(); // Upload images and get URLs
    const postInfo: IPostCreate = {
      content: editorContent,
      author: user?._id as string,
      images: imageUrls, // Use the uploaded image URLs
      isPremium,
      category: category,
    };
    createPost(postInfo); // Send the post info with images
    setIsLoading(false);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Post created successfully");
      setEditorContent("");
      setImageFiles([]); // Reset image files after posting
      setIsOpen(false); // Close the modal after success
    }
  }, [isSuccess, setIsOpen]);

  return (
    <>
      <h2 className="font-semibold text-xl text-center mb-2">Create Post</h2>
      <div
        // style={{ width: 600, height: 236 }}
        className="bg-white rounded-md md:w-[600px] md:h-[236px] h-[150px]"
      >
        {isLoading && <Loader />}
        <div ref={quillRef} />
        <div className="flex items-center space-x-2 mt-2">
          <Checkbox
            id="premium"
            onCheckedChange={(e) => setIsPremium(e as boolean)}
          />
          <label
            htmlFor="premium"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Is Premium
          </label>
        </div>
        <div className="my-2 grid grid-cols-3 gap-2">
          {/* Updated file input to handle change */}
          <Input
            id="picture"
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="col-span-2"
          />
          <select
            name=""
            id=""
            className="input-style bg-white"
            required
            onChange={(e) => setCategory(e.target.value)}
          >
            {postCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button
          disabled={isLoading}
          onClick={handlePost}
          className="font-semibold uppercase p-1.5 text-white w-full mt-4 rounded-sm bg-primary"
        >
          Post
        </button>
      </div>
    </>
  );
};

export default PostTextArea;

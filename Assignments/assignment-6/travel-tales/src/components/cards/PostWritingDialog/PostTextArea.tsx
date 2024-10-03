"use client";

import { useDialog } from "@/components/core/Dialog";
import { Input } from "@/components/ui/input";
import Loader from "@/components/ui/Loader";
import envConfig from "@/config/envConfig";
import { useUser } from "@/context/userProvider";
import useCreatePost from "@/hooks/post/useCreatePost";
import { IPost } from "@/type/post";
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
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: toolbarOptions, // Set the custom toolbar here
    },
  });
  const [editorContent, setEditorContent] = useState<string>("");
  const [imageFiles, setImageFiles] = useState<File[]>([]); // State for storing image files

  console.log(imageFiles);

  const { mutate: createPost, isSuccess } = useCreatePost();

  useEffect(() => {
    if (quill) {
      // Listen for changes in the editor
      quill.on("text-change", () => {
        // Get the content of the editor in HTML format
        setEditorContent(quill.root.innerHTML);
      });
    }
  }, [quill]);

  /**
   * Handle file input change
   * @param event File input change event
   */
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
      console.log(file);
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
    setIsLoading(true);
    if (!editorContent) {
      toast.error("Please write something");
      return;
    }
    const imageUrls = await uploadImages(); // Upload images and get URLs
    const postInfo: IPost = {
      content: editorContent,
      author: user?._id,
      images: imageUrls, // Use the uploaded image URLs
      isPremium: false,
    };
    createPost(postInfo); // Send the post info with images
    setIsLoading(false);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Post created successfully");
      setEditorContent("");
      setImageFiles([]); // Reset image files after posting
      setIsOpen(false);
    }
  }, [isSuccess, setIsOpen]);

  return (
    <>
      <div style={{ width: 600, height: 236 }} className="bg-white rounded-md">
        {isLoading && <Loader />}
        <div ref={quillRef} />
        <div className="m-2 space-y-1-">
          {/* Updated file input to handle change */}
          <Input
            id="picture"
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
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

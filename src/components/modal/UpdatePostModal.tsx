import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import envConfig from "@/config/envConfig";
import { postCategories } from "@/const/postCategories";
import useUpdatePostMutation from "@/hooks/post/useUpdatePostMutation";
import { IPost } from "@/type/post";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import { toast } from "sonner";
import { Checkbox } from "../ui/checkbox";

const toolbarOptions = [
  [{ header: [1, 2, false] }],
  ["bold", "italic", "underline"],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }],
  ["clean"], // remove formatting button
];

export function UpdatePostModal({ post }: { post: IPost }) {
  const { _id, content, isPremium, category, images } = post; // Ensure 'images' is included
  const { mutate: updatePost } = useUpdatePostMutation(_id as string);

  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [isPremiumState, setIsPremiumState] = useState<boolean>(isPremium);
  const [selectedCategory, setSelectedCategory] = useState<string>(category);
  const [isOpen, setIsOpen] = useState(false);

  // Initialize Quill
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: toolbarOptions,
    },
  });

  // Set initial content in Quill editor when quill is ready
  useEffect(() => {
    if (quill) {
      quill.setText(""); // Clear any existing content
      quill.clipboard.dangerouslyPasteHTML(content); // Set existing content
    }
  }, [quill, content]);

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
          uploadedImageUrls.push(data.data.url);
        } else {
          console.error("Image upload error:", data.error);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    });

    await Promise.all(uploadPromises);
    return uploadedImageUrls;
  };

  const handleUpdatePost = async () => {
    const newContent = quill!.root.innerHTML; // Get content from Quill
    const uploadedImageUrls = imageFiles.length > 0 ? await uploadImages() : [];

    const updatedPostData = {
      content: newContent,
      isPremium: isPremiumState,
      category: selectedCategory,
      images: uploadedImageUrls.length > 0 ? uploadedImageUrls : images, // Keep existing images if no new uploads
    };

    updatePost(updatedPostData);
    toast.success("Post updated successfully!");
    // Close the modal after updating
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <p>Edit Post</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[40rem] max-h-screen h-[25rem] overflow-auto custom-scrollbar">
        <DialogHeader>
          <DialogTitle>Update Post</DialogTitle>
          <DialogDescription>
            Make changes to your post here. Click update post when you&apos;re
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="bg-white rounded-md">
          {/* Quill editor is shown by default */}
          <div ref={quillRef} className="my-2" />

          <div className="flex items-center space-x-2 mt-2">
            <Checkbox
              id="premium"
              checked={isPremiumState}
              onCheckedChange={(checked) =>
                setIsPremiumState(checked as boolean)
              }
            />
            <label
              htmlFor="premium"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Is Premium
            </label>
          </div>
          <div className="my-2 grid grid-cols-3 gap-2">
            <Input
              id="picture"
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setImageFiles(Array.from(e.target.files || []))}
              className="col-span-2"
            />
            <select
              className="input-style bg-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              required
            >
              {postCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Display existing images */}
          {images.length > 0 && (
            <div className="my-4">
              <h3 className="text-sm font-medium">Existing Images:</h3>
              <div className="flex space-x-2 mt-2">
                {images.map((imgUrl, index) => (
                  <Image
                    key={index}
                    src={imgUrl}
                    alt={`Post Image ${index}`}
                    className="h-20 w-20 object-cover"
                    width={100}
                    height={100}
                  />
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleUpdatePost}
            className="font-semibold uppercase p-1.5 text-white w-full mt-4 rounded-sm bg-primary mb-8"
          >
            Update Post
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

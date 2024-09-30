/* eslint-disable jsx-a11y/alt-text */
import {
  Dialog,
  DialogClose,
  DialogContainer,
  DialogContent,
  DialogImage,
  DialogTitle,
  DialogTrigger,
} from "@/components/core/Dialog";
import { ScrollArea } from "@/components/website/scroll-area";
import { Image, Smile, SquarePlus, Video } from "lucide-react";
import PostTextArea from "./PostTextArea";

export default function PostWritingDialog() {
  return (
    <Dialog
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 24,
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: "4px",
        }}
        className="bg-white rounded-md common-shadow"
      >
        <div className="flex items-center space-x-3 p-3 ">
          <DialogImage
            src="images/avator.jpg"
            alt="What I Talk About When I Talk About Running - book cover"
            className="h-8 w-8 object-cover object-top"
            style={{
              borderRadius: "4px",
            }}
          />
          <div className="w-full flex items-center justify-between">
            <DialogTitle className="text-[10px] cursor-text font-medium text-black sm:text-xs">
              Share your thoughts...
            </DialogTitle>
            {/* <DialogSubtitle className="text-[10px] text-gray-600 sm:text-xs">
              Haruki Murakami
            </DialogSubtitle> */}
            <SquarePlus color="#007bff" />
          </div>
        </div>
        <div className="p-3 flex items-center gap-x-3">
          <div className="flex items-center gap-x-1 text-sm bg-gray-100 py-1 px-2 w-fit rounded-md">
            <Image size={18} color="#007bff" /> Photo
          </div>
          <div className="flex items-center gap-x-1 text-sm bg-gray-100 p-1 w-fit rounded-md">
            <Video size={18} color="#007bff" /> Video
          </div>
          <div className="flex items-center gap-x-1 text-sm bg-gray-100 p-1 w-fit rounded-md">
            <Smile size={18} color="#007bff" /> Feelings/Activity
          </div>
        </div>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: "12px",
          }}
          className="p-5 relative h-auto bg-white"
        >
          <ScrollArea className="h-[80vh]" type="scroll">
            <PostTextArea />
          </ScrollArea>
          <DialogClose className="text-zinc-500" />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
}

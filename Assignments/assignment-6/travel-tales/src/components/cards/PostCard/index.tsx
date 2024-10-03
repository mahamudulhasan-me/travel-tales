import { IPost } from "@/type/post";
import {
  ArrowBigDown,
  ArrowBigUp,
  Dot,
  MessageSquare,
  Send,
} from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { ThreeDotPopover } from "./ThreeDotPopover";
const PostCard = ({ post }: { post: IPost }) => {
  const { content, images, author, vote, createdAt } = post;
  return (
    <div className="bg-white common-shadow rounded-md my-4 p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <Image
            src={author?.profilePhoto || "/icons/avatar.png"}
            width={60}
            height={60}
            alt="avatar"
            className="rounded-full ring ring-primary p-0.5 size-12"
          />
          <div>
            <h5 className="flex items-center gap-x-1">
              <span className="font-semibold">{author?.name}</span>{" "}
              <Dot color="gray" />
              <p className="text-sm text-gray-700">
                {moment(createdAt).startOf("minute").fromNow()}
              </p>
            </h5>
            <p className="text-gray-700 text-xs">Web Developer at Webestica</p>
          </div>
        </div>

        <ThreeDotPopover />
      </div>
      <article>
        <div
          className="text-sm text-gray-700 mt-3"
          dangerouslySetInnerHTML={{ __html: content }} // Use dangerouslySetInnerHTML here
        />
        {images?.length > 0 && (
          <Image
            src={images[0]}
            width={600}
            height={300}
            alt="post"
            className="rounded-md mt-3 object-cover object-center w-full h-72"
          />
        )}
        <div className="border-y border-gray-300 mt-4 pb-1 flex gap-x-4 items-center">
          <div className="flex items-center gap-x-2 mt-1 bg-gray-200 rounded-xl w-fit h-9">
            <button className="size-9 bg-gray-300 flex items-center justify-center rounded-full hover:text-primary transition-colors">
              <ArrowBigUp />
            </button>{" "}
            <span className="font-semibold">{vote}</span>{" "}
            <button className="size-9 bg-gray-300 flex items-center justify-center rounded-full hover:text-primary transition-colors">
              <ArrowBigDown />
            </button>{" "}
          </div>
          <div className="flex items-center gap-x-2 mt-1 bg-gray-200 rounded-xl w-fit  px-2 text-sm h-9">
            <MessageSquare size={20} />{" "}
            <span className="font-semibold">57</span>
          </div>
        </div>
      </article>
      <div className="mt-5">
        <>
          <form className="flex items-center gap-x-3 justify-between">
            <Image
              src="/icons/avatar.png"
              width={56}
              height={56}
              alt="post"
              className="rounded-full size-10"
            />

            <input
              type="text"
              className="input-style bg-[#eff2f6] focus:bg-white transition-colors"
            />
            <button type="submit">
              <Send size={28} />
            </button>
          </form>
        </>
        <div className="flex mt-5 gap-x-3">
          <>
            <Image
              src="/icons/avatar.png"
              width={60}
              height={60}
              alt="post"
              className="size-9 rounded-full"
            />
          </>
          <div className="p-3 bg-gray-100 w-full rounded-md">
            <h1 className="flex items-center justify-between font-medium">
              <Link href={"/"} className="hover:text-primary transition-colors">
                {" "}
                Mahamudul Hasan
              </Link>
              <span className="text-xs text-gray-500">5 hours ago</span>
            </h1>
            <p className="text-gray-700 mt-1">
              Removed demands expense account in outward tedious do. Particular
              way thoroughly unaffected projection.
            </p>
          </div>
        </div>
        <div className="flex mt-5 gap-x-3">
          <>
            <Image
              src="/icons/avatar.png"
              width={60}
              height={60}
              alt="post"
              className="size-9 rounded-full"
            />
          </>
          <div className="p-3 bg-gray-100 w-full rounded-md">
            <h1 className="flex items-center justify-between font-medium">
              <Link href={"/"} className="hover:text-primary transition-colors">
                {" "}
                Mahamudul Hasan
              </Link>
              <span className="text-xs text-gray-500">5 hours ago</span>
            </h1>
            <p className="text-gray-700 mt-1">
              Removed demands expense account in outward tedious do. Particular
              way thoroughly unaffected projection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

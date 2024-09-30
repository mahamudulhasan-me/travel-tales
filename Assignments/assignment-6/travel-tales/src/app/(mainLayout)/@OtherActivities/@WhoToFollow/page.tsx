import { Plus, UserCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WhoToFollow = () => {
  return (
    <div className="bg-white rounded-md common-shadow p-5">
      <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 mb-4">
        Who to Follow
      </h2>
      <div className="mt-4 space-y-5">
        <div className="flex justify-between items-center">
          <aside className="flex items-center gap-x-3">
            <Image
              src={"/images/avator.jpg"}
              width={60}
              height={60}
              alt="avatar"
              className="rounded-full ring ring-primary p-0.5 size-10"
            />
            <div>
              <h1 className="font-medium">Mahamudul Hasan</h1>
              <p className="text-sm text-gray-500">@mahamudul_hasan</p>
            </div>
          </aside>
          <button className="size-10 rounded-full bg-blue-100 flex justify-center items-center text-primary hover:bg-primary hover:text-white transition-colors">
            <Plus />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <aside className="flex items-center gap-x-3">
            <Image
              src={"/images/avator.jpg"}
              width={60}
              height={60}
              alt="avatar"
              className="rounded-full  size-10"
            />
            <div>
              <h1 className="font-medium">Mahamudul Hasan</h1>
              <p className="text-sm text-gray-500">@mahamudul_hasan</p>
            </div>
          </aside>
          <button className="size-10 rounded-full bg-blue-100 flex justify-center items-center text-primary hover:bg-primary hover:text-white transition-colors">
            <Plus />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <aside className="flex items-center gap-x-3">
            <Image
              src={"/images/avator.jpg"}
              width={60}
              height={60}
              alt="avatar"
              className="rounded-full  size-10"
            />
            <div>
              <h1 className="font-medium">Mahamudul Hasan</h1>
              <p className="text-sm text-gray-500">@mahamudul_hasan</p>
            </div>
          </aside>
          <button className="size-10 rounded-full flex justify-center items-center  bg-primary text-white transition-colors">
            <UserCheck />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <aside className="flex items-center gap-x-3">
            <Image
              src={"/images/avator.jpg"}
              width={60}
              height={60}
              alt="avatar"
              className="rounded-full  size-10"
            />
            <div>
              <h1 className="font-medium">Mahamudul Hasan</h1>
              <p className="text-sm text-gray-500">@mahamudul_hasan</p>
            </div>
          </aside>
          <button className="size-10 rounded-full bg-blue-100 flex justify-center items-center text-primary hover:bg-primary hover:text-white transition-colors">
            <Plus />
          </button>
        </div>
        <Link
          href={"/"}
          className="block text-primary mt-4 gap-x-1 text-sm hover:text-white hover:bg-primary w-full transition-colors bg-blue-100 p-1.5 rounded-md text-center font-semibold"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default WhoToFollow;

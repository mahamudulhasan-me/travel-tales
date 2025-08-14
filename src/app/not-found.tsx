import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-4rem)]">
      <Image src="/icons/space.png" alt="not found" width={200} height={200} />
      <h1 className="text-2xl font-semibold text-gray-600">
        This page isn&apos;t available
      </h1>
      <Link href="/">
        <button className="bg-primary text-white font-semibold py-2 px-6 rounded mt-2">
          Go to News Feed
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;

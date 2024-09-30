import { InfiniteSlider } from "@/components/core/InfiniteSlider";
import { Ellipsis } from "lucide-react";
import Link from "next/link";

const LatestPost = () => {
  return (
    <div className="bg-white rounded-md common-shadow p-5">
      <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 mb-4">
        Latest Posts
      </h2>
      <div className="mt-4 ">
        <InfiniteSlider
          direction="vertical"
          className="space-y-3 h-[50vh] overflow-hidden"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i}>
              <h6 className="font-semibold text-gray-900">
                Ten question you should answer truthfully
              </h6>
              <span className="text-gray-500 text-sm">2 hours ago</span>
            </div>
          ))}
        </InfiniteSlider>
        <Link
          href={"/"}
          className="flex text-gray-700 mt-4 gap-x-1 text-sm hover:text-primary transition-colors"
        >
          <Ellipsis /> View all latest posts
        </Link>
      </div>
    </div>
  );
};

export default LatestPost;

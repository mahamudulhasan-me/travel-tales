import Link from "next/link";
import PostOpenModal from "../modal/PostOpenModal";
import "./GlobalSearchStyle.css";
const GlobalSearch = () => {
  const isSearchValue = false;
  return (
    <div className="relative">
      <div className="group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-search icon"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input placeholder="Search Post..." type="search" className="input" />
      </div>
      {isSearchValue && (
        <div className="absolute w-72 bg-white p-1 glassmorphisom rounded-b-md">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col  hover:bg-gray-50 p-1 rounded-md transition-colors"
            >
              <Link href={"/"} className="font-semibold text-sm">
                Mahamudul Hasan
              </Link>
              <article className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                ea
              </article>
              <div className="flex items-center text-xs">
                {/* <button className="text-primary font-semibold w-24 ">
                  View Details
                </button> */}
                <PostOpenModal />
                <div className="w-full h-[0.5px] bg-gray-500 mt-1"></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;

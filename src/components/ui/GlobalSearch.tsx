"use client";
import { useUser } from "@/context/userProvider";
import useGetPosts from "@/hooks/post/useGetPosts";
import { IPost } from "@/type/post";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import PostOpenModal from "../modal/PostOpenModal";
import "./GlobalSearchStyle.css";

const GlobalSearch = () => {
  const { user } = useUser();
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState(""); // State for debounced value
  const [isSearchDivOpen, setIsSearchDivOpen] = useState(false); // Control modal open/close

  const searchDivRef = useRef<HTMLDivElement>(null); // Ref to track clicks outside

  // Debouncing effect: update debounced value after 500ms of inactivity
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 500); // 500ms delay (can be adjusted)

    // Open the modal when user starts typing
    if (searchValue.trim()) {
      setIsSearchDivOpen(true);
    } else {
      setIsSearchDivOpen(false); // Close modal when search input is cleared
    }

    // Clean up the timeout if searchValue changes (debouncing logic)
    return () => {
      clearTimeout(handler);
    };
  }, [searchValue]); // Only re-run the effect if searchValue changes

  // Fetch posts using the debounced search value
  const { data, isLoading } = useGetPosts(
    5,
    "default",
    "default",
    debouncedSearchValue
  );

  // Handle clicks outside of the search box to close the modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchDivRef.current &&
        !searchDivRef.current.contains(event.target as Node)
      ) {
        setIsSearchDivOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchDivRef]);

  return (
    <div className={user?._id ? "relative" : "hidden"} ref={searchDivRef}>
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
        <input
          placeholder="Search Post..."
          type="search"
          className="input"
          onChange={(e) => setSearchValue(e.target.value)} // Update search value on input change
        />
      </div>

      {/* Show search modal if search div is open and searchValue is not empty */}
      {isSearchDivOpen && debouncedSearchValue && (
        <div className="absolute w-72 bg-white p-1 glassmorphisom rounded-b-md z-10">
          {/* Loading state */}
          {isLoading && (
            <div className="text-center p-2 text-sm text-gray-500">
              Loading...
            </div>
          )}

          {/* No posts found */}
          {!isLoading &&
            debouncedSearchValue &&
            data?.data?.posts?.length === 0 && (
              <div className="text-center p-2 text-sm text-gray-500">
                No matches found
              </div>
            )}

          {/* Display search results */}
          {debouncedSearchValue && data?.data?.posts?.length > 0 && (
            <div>
              {data?.data?.posts?.map((post: IPost, index: number) => (
                <div
                  key={index}
                  className="flex flex-col  hover:bg-gray-50 p-1 rounded-md transition-colors"
                >
                  <Link href={"/"} className="font-semibold text-sm">
                    {post?.author?.name || "Author"}
                  </Link>
                  <article
                    className="text-xs"
                    dangerouslySetInnerHTML={{
                      __html: post?.content.slice(0, 120),
                    }}
                  />

                  <div className="flex items-center text-xs mt-1">
                    <PostOpenModal post={post} />
                    <div className="w-full h-[0.5px] bg-gray-500 mt-1"></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;

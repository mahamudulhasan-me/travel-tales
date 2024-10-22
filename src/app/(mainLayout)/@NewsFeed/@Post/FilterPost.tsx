import { postCategories } from "@/const/postCategories";
import { Dispatch, SetStateAction } from "react";

interface IFilterProps {
  filterBy: string;
  setFilterBy: Dispatch<SetStateAction<string>>;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
}
const FilterPost = ({
  filterBy,
  setFilterBy,
  sortBy,
  setSortBy,
}: IFilterProps) => {
  return (
    <div className="flex items-center mt-4 gap-x-2">
      {/* Left line */}
      <div className="w-10 h-[1px] bg-gray-400"></div>

      {/* Filter Label */}
      <span className="font-semibold text-sm whitespace-nowrap">Filter By</span>

      {/* Middle line */}
      <div className="flex-1 h-[1px] bg-gray-400"></div>

      {/* Filter Options */}
      <div className="flex items-center gap-x-2">
        {/* Category Filter */}
        <select
          name="category"
          className="bg-transparent outline-none w-24 text-sm"
          onChange={(e) => setFilterBy(e.target.value)}
          value={filterBy}
        >
          <option value="default">category</option>
          <option value="default">Default</option>
          {postCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Divider */}
        <div className="w-8 h-[1px] bg-gray-400"></div>

        {/* Vote Filter */}
        <select
          name="vote"
          className="bg-transparent outline-none w-16 text-sm"
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
        >
          <option value="default">vote</option>
          <option value="default">Default</option>
          <option value="upVote">UpVoted</option>
          <option value="downVote">DownVoted</option>
        </select>
      </div>

      {/* Right line */}
      <div className="flex w-10  h-[1px] bg-gray-400"></div>
    </div>
  );
};

export default FilterPost;

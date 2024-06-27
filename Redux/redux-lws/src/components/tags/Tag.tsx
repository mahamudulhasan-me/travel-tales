import { FC } from "react";
import { ITags } from "../../redux/features/tags/tagsSlice";

interface ITagProps {
  tag: ITags;
  key: number;
}
const Tag: FC<ITagProps> = ({ tag }) => {
  return (
    <div>
      <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
        {tag.title}
      </div>
      {/* <!-- selected --> */}
      {/* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
        redux
      </div> */}
    </div>
  );
};

export default Tag;

import { removeTags, setTags } from "../../redux/features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Tag = ({ title }: { title: string }) => {
  const dispatch = useAppDispatch();
  const { tags: selectedTags } = useAppSelector((state) => state.filter);

  const isSelected = selectedTags?.includes(title) ? true : false;

  const handleSelectTag = () => {
    if (isSelected) {
      dispatch(removeTags(title));
    } else {
      dispatch(setTags(title));
    }
  };

  return (
    <div>
      <div
        onClick={handleSelectTag}
        className={`${
          isSelected ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600 "
        } px-4 py-1 rounded-full cursor-pointer`}
      >
        {title}
      </div>
      {/* <!-- selected --> */}
      {/* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
        redux
      </div> */}
    </div>
  );
};

export default Tag;

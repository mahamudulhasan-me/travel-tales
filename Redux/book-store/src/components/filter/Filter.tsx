import { selectBookType } from "../../redux/features/books/booksSlice";
import { useAppDispatch } from "../../redux/hook";

const Filter = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          className="lws-filter-btn active-filter"
          onClick={() => dispatch(selectBookType("all"))}
        >
          All
        </button>
        <button
          className="lws-filter-btn"
          onClick={() => dispatch(selectBookType("featured"))}
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default Filter;

import { selectBookType } from "../../redux/features/books/booksSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

const Filter = () => {
  const dispatch = useAppDispatch();
  const { bookType } = useAppSelector((state) => state.bookFilter);
  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          className={`lws-filter-btn ${bookType === "all" && "active-filter"}`}
          onClick={() => dispatch(selectBookType("all"))}
        >
          All
        </button>
        <button
          className={`lws-filter-btn ${
            bookType === "featured" && "active-filter"
          }`}
          onClick={() => dispatch(selectBookType("featured"))}
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default Filter;

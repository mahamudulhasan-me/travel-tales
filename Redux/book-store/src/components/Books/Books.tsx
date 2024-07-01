import { useGetBooksQuery } from "../../redux/features/api/apiSlice";
import { useAppSelector } from "../../redux/hook";
import { IBook } from "../../types/TBook";
import Filter from "../filter/Filter";
import Error from "../ui/Error";
import Book from "./Book";

const Books = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery(undefined);
  const { bookType, searchKey } = useAppSelector((state) => state.bookFilter);
  console.log(bookType, searchKey);

  let content = null;
  if (isLoading) content = <p>Loading...</p>;
  if (!isLoading && isError)
    content = <Error message="There is an error occurred!" />;

  if (!isLoading && !isError && books.length === 0) {
    content = <p>Books not found!</p>;
  }
  if (!isLoading && !isError && books.length) {
    content = books
      .filter((book) => (bookType === "featured" ? book.featured : book))
      .map((book: IBook) => <Book book={book} />);
  }
  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <Filter />
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* <!-- Card 1 --> */}
          {content}
        </div>
      </div>
    </main>
  );
};

export default Books;

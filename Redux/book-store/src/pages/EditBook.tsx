import { useParams } from "react-router-dom";
import EditBookForm from "../components/EditBook/EditBookForm";
import Error from "../components/ui/Error";
import { useGetBookQuery } from "../redux/features/api/apiSlice";

const EditBook = () => {
  const { id } = useParams();

  const { data: book, isLoading, isError } = useGetBookQuery(id);
  let content = null;
  if (isLoading) content = <p>Loading...</p>;
  if (!isLoading && isError)
    content = <Error message="There is an error occurred!" />;
  if (!isLoading && !isError && book) content = <EditBookForm book={book} />;

  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
          {content}
        </div>
      </div>
    </main>
  );
};

export default EditBook;

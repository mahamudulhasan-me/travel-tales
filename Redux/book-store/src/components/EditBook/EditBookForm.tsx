import { FormEvent, useEffect, useState } from "react";
import { useEditBookMutation } from "../../redux/features/api/apiSlice";
import { IBook } from "../../types/TBook";

const EditBookForm = ({ book }: { book: IBook }) => {
  // i = initial
  const {
    id,
    author: iAuthor,
    name: iName,
    thumbnail: iThumbnail,
    price: iPrice,
    rating: iRating,
    featured: iFeatured,
  } = book;
  const [editBookMutation, { isLoading, isSuccess, isError }] =
    useEditBookMutation();
  const [name, setName] = useState(iName);
  const [author, setAuthor] = useState(iAuthor);
  const [thumbnail, setThumbnail] = useState(iThumbnail);
  const [price, setPrice] = useState(iPrice.toString());
  const [rating, setRating] = useState(iRating.toString());
  const [featured, setFeatured] = useState(iFeatured);

  const handleEditBook = (e: FormEvent) => {
    e.preventDefault();
    editBookMutation({
      id,
      data: {
        name,
        author,
        thumbnail,
        price: Number(price),
        rating: Number(rating),
        featured: Boolean(featured),
      },
    });
  };

  useEffect(() => {
    if (isSuccess) {
      alert("Update Successfully");
    }
  }, [isSuccess]);

  return (
    <form className="book-form" onSubmit={handleEditBook}>
      <div className="space-y-2">
        <label>Book Name</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-bookName"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label>Author</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label>Image Url</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-thumbnail"
          name="thumbnail"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <label>Price</label>
          <input
            required
            className="text-input"
            type="number"
            id="lws-price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label>Rating</label>
          <input
            required
            className="text-input"
            type="number"
            id="lws-rating"
            name="rating"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="lws-featured"
          type="checkbox"
          name="featured"
          className="w-4 h-4"
          checked={featured}
          onChange={(e) => setFeatured(e.target.checked)}
        />
        <label className="ml-2 text-sm"> This is a featured book </label>
      </div>

      <button
        disabled={isLoading}
        type="submit"
        className="submit"
        id="lws-submit"
      >
        Add Book
      </button>

      {isError && <p className="error">Something went wrong</p>}
    </form>
  );
};

export default EditBookForm;

import { FormEvent, useState } from "react";
import { useMatch, useNavigate } from "react-router";
import { setSearch } from "../../redux/features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Search = () => {
  const { search } = useAppSelector((state) => state.filter);
  const [value, setValue] = useState(search);
  const dispatch = useAppDispatch();

  const isMatch = useMatch("/");
  const navigate = useNavigate();
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearch(value));

    if (!isMatch) {
      navigate("/");
    }
  };

  return (
    <>
      {/* <!-- search --> */}
      <form onSubmit={handleSearch}>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          value={value}
          placeholder="Search"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </>
  );
};

export default Search;

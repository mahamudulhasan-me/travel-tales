import logo from "../../assets/images/logo.svg";
import Search from "./Search";

const Nav = () => {
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <img src={logo} width="150px" className="object-contain" />

        <ul className="hidden md:flex items-center space-x-6">
          <a
            className="font-semibold cursor-pointer"
            href="index.html"
            id="lws-bookStore"
          >
            <li>Book Store</li>
          </a>
          <a className="cursor-pointer" href="AddBook.html" id="lws-addBook">
            <li>Add Book</li>
          </a>
        </ul>
        <Search />
      </div>
    </nav>
  );
};

export default Nav;

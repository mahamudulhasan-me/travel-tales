import Books from "../components/Books/Books";
import Nav from "../components/nav/Nav";
import AddNewBook from "./AddNewBook";

const Home = () => {
  return (
    <>
      <Nav />
      <Books />
      <AddNewBook />
    </>
  );
};

export default Home;

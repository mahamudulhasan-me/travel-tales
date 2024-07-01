import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import AddNewBook from "./pages/AddNewBook";
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddNewBook />} />
          <Route path="/edit-book/:id" element={<EditBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

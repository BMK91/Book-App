import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ShowBookList from "./components/ShowBookList";
import CreateBook from "./components/CreateBook";
import BookDetails from "./components/BookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ShowBookList />} />
          <Route path="/create-book" element={<CreateBook />} />
          <Route path="/show-book/:id" element={<BookDetails />} />
          <Route path="/update-book/:id" element={<UpdateBookInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

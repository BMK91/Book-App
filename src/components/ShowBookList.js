import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";

function ShowBookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/books")
      .then((res) => {
        // console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const bookList =
    books.length === 0
      ? "No Data"
      : books.map((book, k) => <BookCard book={book} key={k} />);

  return (
    <div className="ShowBookList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Book List</h2>
          </div>

          <div className="col-md-12">
            <Link
              to="/create-book"
              className="btn btn-outline-warning float-right"
            >
              + Add New Book
            </Link>

            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className="list">{bookList}</div>
      </div>
    </div>
  );
}

export default ShowBookList;

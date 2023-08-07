import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for making HTTP requests

const BookData = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/library/books");

      if (response.data.books && Array.isArray(response.data.books)) {
        setBooks(response.data.books);
      } else {
        console.error(
          "Invalid response data format. Expected a 'books' property that is an array."
        );
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Available</th>
            <th>Order</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.title}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.quantity}</td>
              <td>
                <input placeholder="Amount"></input>
                <button>Order</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookData;

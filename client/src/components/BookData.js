import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import SearchBar from "./SearchBar";

const BookData = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/library/books");

      if (response.data.books && Array.isArray(response.data.books)) {
        setBooks(response.data.books);
        setFilteredBooks(response.data.books);
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

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>List of Books</h2>
      <SearchBar onSearch={handleSearch} />
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
          {filteredBooks.map((book) => (
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

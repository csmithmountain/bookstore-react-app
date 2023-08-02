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
      const response = await axios.get("http://localhost:3000/library/books");
      console.log("API Response Data:", response.data); // Log the API response data
      // Check if the response data has a 'books' property that is an array
      if (response.data.books && Array.isArray(response.data.books)) {
        setBooks(response.data.books);
        console.log("Books State:", books); // Log the books state after setting it
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
      <h2>List of Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.title}>
            {book.title} - {book.author} - Quantity: {book.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookData;

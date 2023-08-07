import React from "react";
import BookData from "./BookData";
import Searchbar from "./Searchbar";

function BookList() {
  return (
    <>
      <div data-testid="bookList">
        <Searchbar />
        <BookData />
      </div>
    </>
  );
}

export default BookList;

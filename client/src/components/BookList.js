import React from "react";
import BookData from "./BookData";

function BookList() {
  return (
    <>
      <div data-testid="bookList">
        <input placeholder="Search..."></input>
        <BookData />
      </div>
    </>
  );
}

export default BookList;

/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import React from "react";
import BookList from "./BookList";
import { render, cleanup, screen } from "@testing-library/react";

afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe("BookList", () => {
  render(<BookList />);

  const bookList = screen.getByTestId("bookList");

  test("See if component redners properly", () => {
    expect(bookList).toBeInTheDocument();
  });
});

/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  test("Should filter results based on user input", () => {
    // Mock the onSearch function
    const mockOnSearch = jest.fn();

    // Render the SearchBar component
    const { getByPlaceholderText } = render(
      <SearchBar onSearch={mockOnSearch} />
    );

    // Get the input field by placeholder text
    const input = getByPlaceholderText("Search by title or author");

    // Simulate user input by typing into the input field
    fireEvent.change(input, { target: { value: "Harry Potter" } });

    // Check if the onSearch function was called with the correct search term
    expect(mockOnSearch).toHaveBeenCalledWith("Harry Potter");
  });
});

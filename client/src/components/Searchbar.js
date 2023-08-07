import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm); // Call the parent component's onSearch function
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={handleInputChange} // Call handleInputChange on input change
      />
    </div>
  );
};

export default SearchBar;

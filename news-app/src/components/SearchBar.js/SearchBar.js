import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({
  getCustomNews,
  resetSearchResults,
  searchByCategory,
}) {
  // const [category, setCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    getCustomNews(searchTerm);
  }

  function handleCategoryChange(e) {
    searchByCategory(e.target.value);
  }
  function handleReset() {
    resetSearchResults();
    setSearchTerm("");
  }

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit}>
        <div className="user-inputs-container">
          <div className="category-container">
            <label for="searchCategory">
              See the top headlines by category
            </label>
            <select
              name="searchCategory"
              defaultValue="category"
              onChange={handleCategoryChange}
            >
              <option>Category</option>
              <option value="general">General</option>
              <option value="world">World</option>
              <option value="business">Business</option>
              <option value="technology">Technology</option>
              <option value="entertainment">Entertainment</option>
              <option value="sports">Sports</option>
              <option value="science">Science</option>
              <option value="Health">Health</option>
            </select>
          </div>
          <div className="search-input-container">
            <label>Search by specific topic</label>
            <input
              placeholder="Search for the latest news"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="button-container">
          <button type="submit">Search</button>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

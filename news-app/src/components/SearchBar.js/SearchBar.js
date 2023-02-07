import React, { useState } from "react";

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
        <label for="searchCategory">
          See the latest in different topics:
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
        </label>
        <label>Or search for articles on specific topic</label>
        <input
          placeholder="Search for the latest news"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button type="submit">Search</button>
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
}

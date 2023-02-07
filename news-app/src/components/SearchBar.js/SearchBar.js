import React from "react";

export default function SearchBar({ setSearchTerm, getCustomNews }) {
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleClick() {
    console.log("click");
    getCustomNews();
  }

  return (
    <div className="search-bar-container">
      <input placeholder="Search for the latest news" onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

import "./App.css";
import React, { useState } from "react";
import ReadLater from "./components/ReadLater/ReadLater";
import SearchBar from "./components/SearchBar.js/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import useFetch from "./hooks/useFetch/useFetch";

function App() {
  //environment variable for security
  const apiKey = process.env.REACT_APP_API_KEY;
  // initial top headline fetch url for page load
  const urlOnLoad =
    "https://gnews.io/api/v4/top-headlines?category=general" +
    "&apikey=" +
    apiKey +
    "&lang=en" +
    "&max=10";
  const [url, setUrl] = useState(urlOnLoad);

  //custom hook for fetching news from API
  const { data, error } = useFetch(url);

  function getCustomNews(searchTerm) {
    let url =
      "https://gnews.io/api/v4/search?q=" +
      searchTerm +
      "&apikey=" +
      apiKey +
      "&lang=en" +
      "&max=10";
    setUrl(url);
  }

  function searchByCategory(category) {
    let url =
      "https://gnews.io/api/v4/top-headlines?category=" +
      category +
      "&apikey=" +
      apiKey +
      "&lang=en" +
      "&max=10";
    setUrl(url);
  }

  function resetSearchResults() {
    setUrl(urlOnLoad);
  }

  return (
    <div className="app-container">
      <header className="app-header"></header>
      <div className="body-container">
        <div className="search-container">
          <SearchBar
            getCustomNews={getCustomNews}
            resetSearchResults={resetSearchResults}
            searchByCategory={searchByCategory}
          />
          <SearchResults data={data} error={error} />
        </div>
        <div className="readlater-container">
          <ReadLater />
        </div>
      </div>
    </div>
  );
}

export default App;

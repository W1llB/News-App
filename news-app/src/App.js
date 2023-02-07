import "./App.css";
import React, { useState } from "react";
import ReadLater from "./components/ReadLater/ReadLater";
import SearchBar from "./components/SearchBar.js/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import useFetch from "./hooks/useFetch/useFetch";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("general");
  const [searchLanguage, setSearchLanguage] = useState("en");

  //environment variable for security
  const apiKey = process.env.REACT_APP_API_KEY;
  const urlOnLoad =
    "https://gnews.io/api/v4/top-headlines?category=" +
    searchCategory +
    "&apikey=" +
    apiKey +
    "&lang=" +
    searchLanguage +
    "&max=10";
  const [url, setUrl] = useState(urlOnLoad);

  //custom hook for fetching news from API
  const { data, error } = useFetch(url);

  async function getCustomNews() {
    let urlCustomSearch =
      "https://gnews.io/api/v4/search?q=" +
      searchTerm +
      "&apikey=" +
      apiKey +
      "&lang=" +
      searchLanguage +
      "&max=10";
    setUrl(urlCustomSearch);
    console.log(url);
  }
  return (
    <div className="app-container">
      <header className="app-header"></header>
      <div className="body-container">
        <div className="search-container">
          <SearchBar
            setSearchTerm={setSearchTerm}
            getCustomNews={getCustomNews}
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

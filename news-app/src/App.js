import "./App.css";
import ReadLater from "./components/ReadLater/ReadLater";
import SearchBar from "./components/SearchBar.js/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  return (
    <div className="app-container">
      <header className="app-header"></header>
      <div className="body-container">
        <div className="search-container">
          <SearchBar />
          <SearchResults />
        </div>
        <div className="readlater-container">
          <ReadLater />
        </div>
      </div>
    </div>
  );
}

export default App;

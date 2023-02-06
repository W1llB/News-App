import "./App.css";
import SearchBar from "./components/SearchBar.js/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <SearchBar />
        <SearchResults />
      </div>
    </div>
  );
}

export default App;

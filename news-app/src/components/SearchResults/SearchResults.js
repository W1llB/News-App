import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
// import data from "../../JSON/dummy-data";
import "./SearchResults.css";

// const articles = articlesObject.articles;

export default function SearchResults({ data, error, loading }) {
  if (error) {
    return (
      <div>
        {error.status === 403 && (
          <h4>
            Request limit reached on API free tier 😥
            <br /> Try again tomorrow...
          </h4>
        )}
        {error.status !== 403 && <h4>Oops something went wrong there.</h4>}
      </div>
    );
  } else if (data) {
    return (
      <div className="results-container">
        {loading && <h4>Loading results ...</h4>}
        {data.articles &&
          data.articles.map((article, index) => {
            return <ArticleCard key={index} article={article} />;
          })}
      </div>
    );
  }
}

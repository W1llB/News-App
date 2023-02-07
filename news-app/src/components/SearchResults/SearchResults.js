import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
// import data from "../../JSON/dummy-data";
import "./SearchResults.css";

// const articles = articlesObject.articles;

export default function SearchResults({ data, error }) {
  if (!error) {
    return (
      <div>
        <h4>
          Request limit reached on API free tier 😥
          <br /> Try again tomorrow...
        </h4>
      </div>
    );
  } else {
    return (
      <div className="results-container">
        {data.articles &&
          data.articles.map((article, index) => {
            return <ArticleCard key={index} article={article} />;
          })}
      </div>
    );
  }
}

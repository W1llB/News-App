import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import data from "../../JSON/dummy-data";
import "./SearchResults.css";

// const articles = articlesObject.articles;

export default function SearchResults({ data, error }) {
  return (
    <div className="results-container">
      {data &&
        data.articles.map((article, index) => {
          return <ArticleCard key={index} article={article} />;
        })}
      {error && <p>error</p>}
    </div>
  );
}

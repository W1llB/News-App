import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import articles from "../../JSON/dummy-data";
import "./SearchResults.css";

const articlesArray = articles.articles;

export default function SearchResults() {
  return (
    <div className="results-container">
      {articlesArray.map((article, index) => {
        return <ArticleCard key={index} article={article} />;
      })}
    </div>
  );
}

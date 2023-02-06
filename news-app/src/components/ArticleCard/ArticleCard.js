import React from "react";
import "./ArticleCard.css";

export default function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <div className="article-title">
        <h3>{article.title}</h3>
        <img src={article.image} alt="article related." />
      </div>
      <p>{article.description}</p>
      <a href={article.url}>Go to article</a>
    </div>
  );
}

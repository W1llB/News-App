import React from "react";
import "./ArticleCard.css";

export default function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <div className="article-title">
        <h3>{article.title}</h3>
        <p className="article-description">{article.description}</p>
        <a className="article-url" href={article.url}>
          Go to article
        </a>
      </div>
      <img src={article.image} alt="article related." />
    </div>
  );
}

import React from "react";
import "./ArticleCard.css";
import moment from "moment";

export default function ArticleCard({ article }) {
  //calculate time since publishing
  const now = moment(article.publishedAt).fromNow();
  return (
    <div className="article-card">
      <div className="article-content">
        <div className="article-publisher">
          <a
            style={{ textDecoration: "none" }}
            href={article.source.url}
            target="_blank"
            rel="noreferrer"
          >
            {article.source.name}
          </a>
        </div>
        <div className="article-title">
          <h3>{article.title}</h3>
        </div>
        <p className="article-description">{article.description}</p>
        <div className="article-footer">
          <p>{now}</p>

          <a
            className="article-url"
            style={{ textDecoration: "none" }}
            href={article.url}
            target="_blank"
            rel="noreferrer"
          >
            Go to article
          </a>

          <div />
        </div>
      </div>
      <img src={article.image} alt="article related." />
    </div>
  );
}

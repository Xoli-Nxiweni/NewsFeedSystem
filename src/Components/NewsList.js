// src/Components/NewsList.js
import { useState } from "react";
import useNewsData from "../hooks/useNewsData";
import CustomPagination from "./CustomPagination";
import "./NewsList.css";

const NewsList = ({ category, searchTerm, bookmarks, toggleBookmark, handleShare, cacheArticleForOffline }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  const { newsData, loading, error } = useNewsData(category, searchTerm);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  const totalArticles = newsData.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = newsData.slice(startIndex, endIndex);

  return (
    <div className="news-list-container">
      <div className="news-grid">
        {currentArticles.map((article) => (
          <div className="news-card" key={article.url}>
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title || "News Image"}
                className="news-image"
              />
            )}
            <div className="news-body">
              <h2 className="news-title">{article.title}</h2>
              <p className="news-description">{article.description}</p>
              <a href={article.url} className="news-link" target="_blank" rel="noopener noreferrer">Read More</a>
              <button onClick={() => toggleBookmark(article)}>
                {bookmarks.includes(article.url) ? 'Unbookmark' : 'Bookmark'}
              </button>
              <button onClick={() => cacheArticleForOffline(article)}>Download for Offline</button>
              <button onClick={() => handleShare(article.url)}>Share</button>
            </div>
          </div>
        ))}
      </div>

      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default NewsList;

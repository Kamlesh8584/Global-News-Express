import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Politics.css'; // Make sure this is imported

function Technology() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  const API_KEY = 'fc98740f1cea480f98476d9ff2a39d3f';

const fetchNews = async (pageNumber) => {

  const newsUrl = `https://newsapi.org/v2/everything?q=technology&language=en&sortBy=publishedAt&pageSize=6&page=${pageNumber}&apiKey=${API_KEY}`;

  const encodedUrl = encodeURIComponent(newsUrl);

  const finalUrl = `https://api.allorigins.win/raw?url=${encodedUrl}`;

  try {
    const response = await axios.get(finalUrl);
    const newArticles = response.data.articles;

    setArticles((prev) => [...prev, ...newArticles]);
    setHasMore(newArticles.length > 0);
  } catch (error) {
    console.error("Error fetching global political news:", error);
    setHasMore(false);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchNews(page);
  }, [page]);

  const loadMoreNews = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {/* Categories Section */}
      <section className="categories">
        <h2>Explore Categories</h2>
        <div className="category-list">
          <span onClick={() => navigate('/politics')}>Politics</span>
          <span onClick={() => navigate('/business')}>Business</span>
          <span onClick={() => navigate('/technology')}>Technology</span>
          <span onClick={() => navigate('/sports')}>Sports</span>
          <span onClick={() => navigate('/entertainment')}>Entertainment</span>
          <span onClick={() => navigate('/health')}>Health</span>
        </div>
      </section>

      {/* News Section */}
      <div className="politics-container">
        <h1>🌍 Global Technology News</h1>
        {loading && page === 1 ? (
          <p className="loading">Loading news...</p>
        ) : (
          <>
            <div className="news-grid">
              {articles.map((article, index) => (
                <div key={index} className="news-card">
                  {article.urlToImage && (
                    <img src={article.urlToImage} alt={article.title} className="news-image" />
                  )}
                  <div className="news-content">
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      Read Full Article →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="load-more-container">
                <button onClick={loadMoreNews} className="load-more-btn">
                  Load More News
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Technology;

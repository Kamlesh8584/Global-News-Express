import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Politics.css';

// Firebase Firestore imports
import { db } from './Firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

function Politics() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isBackup, setIsBackup] = useState(false);
  const navigate = useNavigate();

  const API_KEY = 'fc98740f1cea480f98476d9ff2a39d3f';

  // Wrap fetchNews in useCallback
  const fetchNews = useCallback(async (pageNumber) => {
    const newsUrl = `https://newsapi.org/v2/everything?q=Politics&language=en&sortBy=publishedAt&pageSize=6&page=${pageNumber}&apiKey=${API_KEY}`;
    const encodedUrl = encodeURIComponent(newsUrl);
    const finalUrl = `https://api.allorigins.win/raw?url=${encodedUrl}`;

    try {
      const response = await axios.get(finalUrl);
      const newArticles = response?.data?.articles;

      if (Array.isArray(newArticles)) {
        setArticles((prev) => [...prev, ...newArticles]);
        setHasMore(newArticles.length > 0);
      } else {
        throw new Error("API did not return an articles array");
      }
    } catch (error) {
      console.error("❌ API failed, trying backup from Firebase...");
      await fetchFromFirebase(); // Await backup fetch
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchFromFirebase = useCallback(async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'posts'), where('category', '==', 'Politics'));
      const querySnapshot = await getDocs(q);

      console.log(`📦 Firebase returned ${querySnapshot.size} documents`);

      if (querySnapshot.empty) {
        console.warn("⚠️ No business articles found in Firebase");
      }

      const backupArticles = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        console.log("🧾 Backup Article:", data);
        return {
          title: data.title || 'No Title',
          description: data.description || 'No description available.',
          urlToImage: data.image || 'https://via.placeholder.com/300x200',
          url: data.url || '#',
        };
      });

      setArticles(backupArticles);
      setIsBackup(true);
      setHasMore(false); // disable load more on backup
    } catch (err) {
      console.error("🔥 Firebase fetch failed:", err);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews(page);
  }, [page, fetchNews]); // include fetchNews in dependencies

  const loadMoreNews = () => {
    if (!isBackup) setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
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

      <div className="politics-container">
        <h1>💼 Global Politics News</h1>

        {isBackup && (
          <p className="backup-notice">⚠️ Showing backup data from Firebase.</p>
        )}

        {loading && page === 1 ? (
          <p className="loading">Loading news...</p>
        ) : (
          <>
            {articles.length === 0 ? (
              <p className="loading">😕 No articles found.</p>
            ) : (
              <div className="news-grid">
                {articles.map((article, index) => (
                  <div key={index} className="news-card">
                    {article.urlToImage && (
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="news-image"
                      />
                    )}
                    <div className="news-content">
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                      {article.url && article.url !== '#' && (
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read Full Article →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!isBackup && hasMore && articles.length > 0 && (
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

export default Politics;

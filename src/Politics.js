import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewsItems from './NewsItem';
import './Home.css';

function Politics() {
        const navigate = useNavigate();

  return (
    <>      <section className="categories">
        <h2>Explore Categories</h2>
        <div className="category-list">
                <span  onClick={() => navigate('/politics')}>Politics</span>
                          <span onClick={() => navigate('/business')}>Business</span>
                          <span onClick={() => navigate('/technology')}>Technology</span>
                          <span onClick={() => navigate('/sports')}>Sports</span>
                          <span onClick={() => navigate('/entertainment')}>Entertainment</span>
                          <span onClick={() => navigate('/health')}>Health</span>
        </div>
      </section>
<div>
This is News Component
<NewsItems/>
<NewsItems/>
<NewsItems/>
<NewsItems/>
<NewsItems/>
<NewsItems/>
</div>


</>


  );
}

export default Politics;

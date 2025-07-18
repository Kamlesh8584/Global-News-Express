import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyDyeNKt0VviZLzXIYqvT_3rcH4rGb3TPOk';

const CHANNELS = {
  "BBC News": { id: "UC16niRr50-MSBwiO3YDb3RA", emoji: "🌍" },
  "CNN": { id: "UCupvZG-5ko_eiXAupbDfxWw", emoji: "🇺🇸" },
  "DW News": { id: "UCknLrEdhRCp1aegoMqRaCZg", emoji: "🇩🇪" },
  "Sky News": { id: "UCoMdktPbSTixAyNGwb-UYkQ", emoji: "📡" },
  "Al Jazeera": { id: "UCNye-wNBqNL5ZzHSJj3l8Bg", emoji: "🌐" },
  "NDTV": { id: "UCZFMm1mMw0F81Z37aaEzTUA", emoji: "📰" },
  "Aaj Tak": { id: "UCt4t-jeY85JegMlZ-E5UWtA", emoji: "🇮🇳" },
  "India Today": { id: "UCYPvAwZP8pZhSMW8qs7cVCw", emoji: "🧭" },
};

function YT() {
  const [selectedChannel, setSelectedChannel] = useState("BBC News");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`, {
            params: {
              key: API_KEY,
              channelId: CHANNELS[selectedChannel].id,
              part: 'snippet',
              order: 'date',
              maxResults: 10,
            }
          }
        );
        setVideos(res.data.items);
      } catch (err) {
        console.error("Error fetching videos:", err);
      }
    };

    fetchVideos();
  }, [selectedChannel]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#f7f9fb' }}>
      <h2 style={{ textAlign: 'center', color: '#007bff', marginBottom: '20px' }}>
        YouTube News Channels
      </h2>

      {/* Channel Buttons */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '100px'
      }}>
        {Object.entries(CHANNELS).map(([name, data]) => (
          <button
            key={name}
            onClick={() => setSelectedChannel(name)}
            style={{
              padding: '15px 40px',
              borderRadius: '50px',
              backgroundColor: selectedChannel === name ? '#007bff' : '#e9f2fb',
              color: selectedChannel === name ? '#fff' : '#007bff',
              border: '1px solid #007bff',
              cursor: 'pointer',
              transition: '0.2s',
              fontWeight: 'bold',
            }}
          >
            {data.emoji} {name}
          </button>
        ))}
      </div>

      {/* Videos */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(600px, 1fr))',
        gap: '100px',
      }}>
        {videos.map((video) => (
          <div key={video.id.videoId} style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
          }}>
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allowFullScreen
              style={{ borderRadius: '10px' }}
            ></iframe>
            <h4 style={{ margin: '10px 0', fontSize: '1rem' }}>{video.snippet.title}</h4>
            <p style={{ fontSize: '0.85rem', color: '#666' }}>
              {new Date(video.snippet.publishedAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YT;

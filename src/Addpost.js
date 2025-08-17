import React, { useState, useEffect } from 'react';
import { db } from './Firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  Timestamp
} from 'firebase/firestore';

function AddPost() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    image: ''
  });
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px'
  };

  const fetchPosts = async () => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postData = {
        ...formData,
        createdAt: Timestamp.now()
      };

      if (editingId) {
        const docRef = doc(db, 'posts', editingId);
        await updateDoc(docRef, postData);
        setStatus('Post updated successfully!');
        setEditingId(null);
      } else {
        await addDoc(collection(db, 'posts'), postData);
        setStatus('Post added successfully!');
      }

      setFormData({ title: '', description: '', category: '', image: '' });
      fetchPosts();
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error processing your request.');
    }
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'posts', id));
    setStatus('Post deleted.');
    fetchPosts();
  };

  const handleEdit = (post) => {
    setFormData({
      title: post.title,
      description: post.description,
      category: post.category,
      image: post.image || ''
    });
    setEditingId(post.id);
    setStatus('Editing post...');
  };

  const filteredPosts = selectedCategory
    ? posts.filter(post => post.category === selectedCategory)
    : posts;

  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', fontFamily: 'Arial' }}>
      <h2>Add a News Post</h2>
      {status && <div style={{ color: 'green', marginBottom: '1rem' }}>{status}</div>}

      <div style={{
        border: '1px solid #ccc',
        padding: '1.5rem',
        borderRadius: '8px',
        backgroundColor: '#f8f8f8',
        marginBottom: '2rem'
      }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
            value={formData.image}
            style={inputStyle}
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={formData.title}
            required
            style={inputStyle}
          />
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            value={formData.description}
            required
            style={{ ...inputStyle, height: '100px' }}
          />
          <select
            name="category"
            onChange={handleChange}
            value={formData.category}
            required
            style={inputStyle}
          >
            <option value="">-- Select Category --</option>
            <option value="Politics">Politics</option>
            <option value="Business">Business</option>
            <option value="Technology">Technology</option>
            <option value="Sports">Sports</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Health">Health</option>
          </select>
          <button type="submit" style={buttonStyle}>
            {editingId ? 'Update Post' : 'Submit Post'}
          </button>
        </form>
      </div>

      {/* Category Filter */}
      <div style={{ marginBottom: '1rem' }}>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: '8px', borderRadius: '5px' }}
        >
          <option value="">-- Filter by Category --</option>
          <option value="Politics">Politics</option>
          <option value="Business">Business</option>
          <option value="Technology">Technology</option>
          <option value="Sports">Sports</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Health">Health</option>
        </select>
      </div>

      {/* Display Posts */}
      {filteredPosts.length > 0 ? (
        <div>
          {filteredPosts.map((post) => (
            <div key={post.id} style={{
              border: '1px solid #ddd',
              padding: '1rem',
              marginBottom: '1rem',
              borderRadius: '6px',
              backgroundColor: '#ffffff'
            }}>
              <h3>{post.title}</h3>
              <p><strong>Category:</strong> {post.category}</p>
              <p><strong>Description:</strong> {post.description}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post Visual"
                  style={{
                    width: '100%',
                    maxHeight: '200px',
                    objectFit: 'cover',
                    marginTop: '10px'
                  }}
                />
              )}
              <div style={{ marginTop: '10px' }}>
                <button onClick={() => handleEdit(post)} style={buttonStyle}>Edit</button>
                <button onClick={() => handleDelete(post.id)} style={{ ...buttonStyle, backgroundColor: '#dc3545' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}

export default AddPost;

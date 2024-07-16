import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VideoForm({ addVideo }) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo({ title, url, category });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Video</h2>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>URL</label>
        <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} required />
      </div>
      <div>
        <label>Category</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
      </div>
      <button type="submit">Add Video</button>
    </form>
  );
}

export default VideoForm;

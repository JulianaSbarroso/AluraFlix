import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditVideoForm({ videos, updateVideo }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState({ title: '', url: '', category: '' });

  useEffect(() => {
    const videoToEdit = videos.find((v) => v.id === parseInt(id));
    if (videoToEdit) {
      setVideo(videoToEdit);
    }
  }, [id, videos]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideo({ ...video, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateVideo(video);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Video</h2>
      <div>
        <label>Title</label>
        <input type="text" name="title" value={video.title} onChange={handleChange} required />
      </div>
      <div>
        <label>URL</label>
        <input type="url" name="url" value={video.url} onChange={handleChange} required />
      </div>
      <div>
        <label>Category</label>
        <input type="text" name="category" value={video.category} onChange={handleChange} required />
      </div>
      <button type="submit">Update Video</button>
    </form>
  );
}

export default EditVideoForm;

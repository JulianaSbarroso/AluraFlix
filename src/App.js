import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import VideoList from './components/VideoList';
import CategoryList from './components/CategoryList';
import VideoForm from './components/VideoForm';
import EditVideoForm from './components/EditVideoForm';
import HomeButton from './components/HomeButton';
import './App.css';

function App() {
  const [videos, setVideos] = useState([
    { id: 1, title: 'Video 1', url: 'https://www.youtube.com/watch?v=abc', category: 'Category 1' },
    { id: 2, title: 'Video 2', url: 'https://www.youtube.com/watch?v=def', category: 'Category 2' },
  ]);

  const addVideo = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  };

  const updateVideo = (updatedVideo) => {
    setVideos(videos.map((video) => (video.id === updatedVideo.id ? updatedVideo : video)));
  };

  const deleteVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <h1>AluraFlix</h1>
        <HomeButton />
        <Routes>
          <Route path="/" element={
            <>
              <CategoryList videos={videos} />
              <VideoList videos={videos} deleteVideo={deleteVideo} />
            </>
          } />
          <Route path="/add" element={<VideoForm addVideo={addVideo} />} />
          <Route path="/edit/:id" element={<EditVideoForm videos={videos} updateVideo={updateVideo} />} />
        </Routes>
        <Link to="/add">Add Video</Link>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

function VideoCard({ video, deleteVideo }) {
  return (
    <div>
      <h2>{video.title}</h2>
      <a href={video.url} target="_blank" rel="noopener noreferrer">
        Watch
      </a>
      <p>{video.category}</p>
      <Link to={`/edit/${video.id}`}>Edit</Link>
      <button onClick={() => deleteVideo(video.id)}>Delete</button>
    </div>
  );
}

export default VideoCard;

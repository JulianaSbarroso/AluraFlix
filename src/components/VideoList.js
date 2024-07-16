import React from 'react';
import VideoCard from './VideoCard';

function VideoList({ videos, deleteVideo }) {
  return (
    <div>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} deleteVideo={deleteVideo} />
      ))}
    </div>
  );
}

export default VideoList;

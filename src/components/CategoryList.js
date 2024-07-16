import React from 'react';

function CategoryList({ videos }) {
  const categories = [...new Set(videos.map((video) => video.category))];

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;

// src/components/BlogPostList.js
import React from 'react';

const BlogPostList = () => {
  // Dummy data for blog posts
  const blogPosts = [
    {
      title: 'Demonstrating Proficiency in Functional and Class Components',
      excerpt: 'In today’s digital age, having a personal website is essential for showcasing your skills...',
      imageUrl: 'your-image-url',
      author: 'claudwang062',
      timeToRead: '2 min',
      postedTime: '4 minutes ago',
      views: '0 views',
      comments: '0 comments',
    },
    // ...add more blog posts
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '20px', marginBottom: '20px' }}>
        <h1 style={{ color: '#333', fontSize: '36px', fontWeight: 'bold' }}>NANJIN WANG</h1>
        {/* Navigation and other header content */}
      </div>
      <div>
        {blogPosts.map((post, index) => (
          <div key={index} style={{ display: 'flex', marginBottom: '20px' }}>
            <div style={{ flex: '1', marginRight: '20px' }}>
              <img src={post.imageUrl} alt={post.title} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div style={{ flex: '2' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '24px', fontWeight: 'bold' }}>{post.title}</h3>
              <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>{post.excerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#888', fontSize: '14px' }}>
                <span>{post.author}</span>
                <span>{post.postedTime} · {post.timeToRead}</span>
                <span>{post.views} · {post.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostList;

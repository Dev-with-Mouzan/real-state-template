import React from 'react';
import { blogPosts } from '../../data/blog';
import './Blog.css';

const Blog = () => {
  return (
    <section className="blog section container" id="blog">
      <div className="section-header">
        <p className="section-subtitle">Latest News</p>
        <h2 className="section-title">Our Blog</h2>
      </div>

      <div className="blog-grid">
        {blogPosts.map(post => (
          <article className="blog-card" key={post.id}>
            <div className="blog-image">
              <img src={post.image} alt={post.title} loading="lazy" />
            </div>
            <div className="blog-content">
              <span className="blog-date">{post.date}</span>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <a href="#" className="blog-link">Read More</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;

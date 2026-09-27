import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blog';
import './Blog.css';

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <div className="blog-container">
        <div className="blog-header">
          <div className="section-header-left">
            <span className="section-tag">Latest News</span>
            <h2 className="section-title">Tips, Trends & Insights<br />From Our Blog</h2>
          </div>
          <Link to="/blog" className="view-all-link">Explore More →</Link>
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
                <Link to={`/blog/${post.id}`} className="blog-link">Read More →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

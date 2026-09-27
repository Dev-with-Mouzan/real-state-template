import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { blogPosts } from '../data/blog';
import Footer from '../components/Footer/Footer';
import './BlogPage.css';

const BlogPage = () => {
  return (
    <div className="blog-page">
      <nav className="detail-nav">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        <span className="detail-logo">Hamza<span>Property</span></span>
      </nav>

      <div className="blog-hero">
        <h1>Our Blog</h1>
        <p>Latest news, tips, and insights from the real estate world</p>
      </div>

      <div className="blog-container">
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="blog-article"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="article-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="article-content">
                <div className="article-meta">
                  <span><Calendar size={14} /> {post.date}</span>
                  <span><User size={14} /> Admin</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="read-more">Read More →</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;

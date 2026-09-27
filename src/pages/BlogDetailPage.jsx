import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { blogPosts } from '../data/blog';
import Footer from '../components/Footer/Footer';
import './BlogDetailPage.css';

const BlogDetailPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="blog-page">
        <nav className="detail-nav">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <span className="detail-logo">Hamza<span>Property</span></span>
        </nav>
        <div className="blog-detail-container">
          <h2>Post not found</h2>
          <Link to="/blog" className="back-to-blog">← Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="blog-page">
      <nav className="detail-nav">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        <span className="detail-logo">Hamza<span>Property</span></span>
      </nav>

      <div className="blog-detail-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="blog-detail-meta">
            <span><Calendar size={14} /> {post.date}</span>
            <span><User size={14} /> Admin</span>
          </div>
          <h1>{post.title}</h1>
        </motion.div>
      </div>

      <div className="blog-detail-container">
        <motion.article
          className="blog-detail-article"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="blog-detail-image">
            <img src={post.image} alt={post.title} />
          </div>
          <div className="blog-detail-content">
            <p>{post.excerpt}</p>
            <p>
              At Hamza Property, we believe in providing valuable insights to help you
              make informed decisions about real estate. Whether you're a first-time buyer,
              an experienced investor, or looking to sell your property, our team of experts
              is here to guide you every step of the way.
            </p>
            <p>
              Stay tuned for more updates, tips, and market analysis from our team.
              We're committed to keeping you informed about the latest trends and
              opportunities in the real estate market.
            </p>
          </div>
        </motion.article>

        <Link to="/blog" className="back-to-blog">← Back to Blog</Link>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;

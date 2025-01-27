import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import blogsData from '../data/blogsData';
import styles from './BlogPost.module.css';
import Navbar from '../components/Navbar';

const BlogPost = () => {
  const { title } = useParams();  // Getting the title from the URL
  const blog = blogsData.find((post) => post.title.replace(/\s+/g, '-').toLowerCase() === title.toLowerCase());  // Matching title from the URL

  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  if (!blog) {
    return (
      <div className={styles.notFound}>
        <h2>Blog not found</h2>
        <Link to="/">Go back to Home</Link>
      </div>
    );
  }

  const handleLike = () => setLikes(likes + 1);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText("");
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.blogPost}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1>{blog.title}</h1>
          <img src={blog.image} alt={blog.title} className={styles.image} />
        </div>

        {/* Author Info */}
        <div className={styles.authorInfo}>
          <img src={blog.authorImage} alt={blog.author} className={styles.authorImage} />
          <div>
            <h3>{blog.author}</h3>
            <p>{blog.authorBio}</p>
          </div>
        </div>

        {/* Content Section */}
        <p className={styles.excerpt}>{blog.excerpt}</p>
        <div className={styles.content}>
          <p>{blog.fullContent}</p>
        </div>

        {/* Like and Share Section */}
        <div className={styles.interaction}>
          <button onClick={handleLike} className={styles.likeButton}>
            👍 Like ({likes})
          </button>
          <div className={styles.shareButtons}>
            <a href={`https://instagram.com/share?url=${window.location.href}&text=${blog.title}`} target="_blank" rel="noreferrer">
              Share on Instagram
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noreferrer">
              Share on Facebook
            </a>
          </div>
        </div>

        {/* Comments Section */}
        <div className={styles.comments}>
          <h2>Comments</h2>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
          <form onSubmit={handleCommentSubmit}>
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment..."
            ></textarea>
            <button type="submit">Post Comment</button>
          </form>
        </div>

        {/* Related Posts Section */}
        <div className={styles.relatedPosts}>
          <h2>Related Posts</h2>
          {blogsData
            .filter((post) => post.category === blog.category && post.title !== blog.title)
            .map((relatedPost) => (
              <Link to={`/blog/${relatedPost.title.replace(/\s+/g, '-').toLowerCase()}`} key={relatedPost.id}>
                <div className={styles.relatedPost}>
                  <img src={relatedPost.image} alt={relatedPost.title} />
                  <h3>{relatedPost.title}</h3>
                </div>
              </Link>
            ))}
        </div>

        {/* Back to Home Link */}
        <Link to="/" className={styles.homeLink}>
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default BlogPost;

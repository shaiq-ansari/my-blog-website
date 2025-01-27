import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import dummyPosts from '../../data/blogsData'; // Importing the blog data
import styles from "./FeaturedPost.module.css";

const FeaturedPosts = () => {
  // Filter posts based on isNew flag being true
  const filteredPosts = dummyPosts.filter(post => post.isNew);

  return (
    <section className={styles.FeaturedPosts}>
      <h2 className={styles.featuredHeading}>Featured Posts</h2>
      <div className={styles.postsContainer}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <div key={post.id} className={styles.postCard}>
              <img src={post.image} alt={post.title} className={styles.postImage} />
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
              {/* Update the Link to use title instead of id */}
              <Link to={`/blog/${post.title.replace(/\s+/g, '-').toLowerCase()}`} className={styles.readMoreBtn}>
                Read More
              </Link>
            </div>
          ))
        ) : (
          <p>No new posts available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedPosts;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Blogs.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import dummyPosts from "../data/blogsData";

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter posts by category
  const filteredPosts =
    selectedCategory === "All"
      ? dummyPosts
      : dummyPosts.filter((post) =>
          selectedCategory === "General Programming"
            ? !["JavaScript", "C++", "Python", "Java"].includes(post.category)
            : post.category === selectedCategory
        );

  // Categories to display
  const categories = ["All", "JavaScript", "C++", "Python", "Java", "General Programming"];

  return (
    <>
      <Navbar />
      <div className={styles.blogContainer}>
        {/* Page Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>CodeCanvas Blog</h1>
          <p className={styles.subtitle}>
            Insights, updates, and trends from the world of coding.
          </p>
        </header>

        {/* Categories Section */}
        <section className={styles.categories}>
          <h2 className={styles.sectionTitle}>Categories</h2>
          <div className={styles.categoryList}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.categoryButton} ${
                  selectedCategory === category ? styles.activeCategory : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className={styles.posts}>
          <h2 className={styles.sectionTitle}>
            {selectedCategory === "All"
              ? "Latest Posts"
              : `${selectedCategory} Posts`}
          </h2>
          <div className={styles.postGrid}>
            {filteredPosts.map((post) => (
              <div className={styles.postCard} key={post.id}>
                <img
                  src={post.image}
                  alt={post.title}
                  className={styles.postImage}
                />
                {post.isNew && <span className={styles.newBadge}>New</span>}
                <div className={styles.postContent}>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  {/* Update the Link to use title instead of id */}
                  <Link
                    to={`/blog/${post.title.replace(/\s+/g, '-').toLowerCase()}`}
                    className={styles.readMoreButton}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;

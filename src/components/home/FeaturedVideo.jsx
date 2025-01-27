import React, { useState } from "react";
import styles from "./FeaturedVideo.module.css";

const FeaturedVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = "HDXpGgieFDg";
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <section className={styles.featuredVideo}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Featured Video</h2>
        <p className={styles.description}>
          Discover insights, tips, and ideas through our curated video content.
        </p>
        <div className={styles.videoWrapper}>
          {isPlaying ? (
            <iframe
              className={styles.video}
              src={`${videoUrl}?autoplay=1`}
              title="Featured Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              className={styles.thumbnail}
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt="Featured Video Thumbnail"
              onClick={() => setIsPlaying(true)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideo;

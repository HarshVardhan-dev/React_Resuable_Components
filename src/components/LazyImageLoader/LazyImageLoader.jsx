import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./LazyImageLoader.module.css";

const LazyImageLoader = ({ imageSrc, altText, height = "600px" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.8, // Trigger when 10% of the element is visible
  });

  return (
    <div ref={ref} className={styles.container} style={{ height }}>
      {inView ? (
        <img
          src={imageSrc}
          alt={altText || "Lazy Loaded"}
          className={styles.image}
        />
      ) : (
        <div className={styles.placeholder}>Loading...</div>
      )}
    </div>
  );
};

export default LazyImageLoader;

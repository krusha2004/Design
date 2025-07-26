import React from "react";
import { motion } from "framer-motion";
import "./Trending.css";

const Trending = () => {
  const articles = [
    { id: 1, title: "Elevate Your Style with Monochrome Magic" },
    { id: 2, title: "Summer Essentials: Lightweight Fabrics & Flowy Fits" },
    { id: 3, title: "5 Wardrobe Staples Every Closet Needs" },
    { id: 4, title: "Streetwear Revolution: From Sidewalks to Runways" },
    { id: 5, title: "Why Earthy Tones Are the Hottest 2025 Trend" },
    { id: 6, title: "Sustainable Fashion: Style Meets Responsibility" },
  ];

  const leftArticles = articles.slice(0, 3);
  const rightArticles = articles.slice(3, 6);

  return (
    <motion.section
      id="trending"
      className="articles-section"
      aria-label="Clothing Articles"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Trending in Fashion
      </motion.h2>

      <div className="articles-columns">
        <div className="articles-column">
          {leftArticles.map((article, index) => (
            <motion.article
              key={article.id}
              tabIndex={0}
              className="article-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {article.title}
            </motion.article>
          ))}
        </div>

        <div className="articles-column">
          {rightArticles.map((article, index) => (
            <motion.article
              key={article.id}
              tabIndex={0}
              className="article-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {article.title}
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Trending;

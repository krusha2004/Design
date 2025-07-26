import React from "react";
import { motion } from "framer-motion";
import "./Shorts.css";

const shorts = [
  {
    id: 1,
    link: "https://www.pehrin.com/cdn/shop/videos/c/vp/17ac1687e6d94ea3b62351f55d0be1f1/17ac1687e6d94ea3b62351f55d0be1f1.HD-1080p-7.2Mbps-49077462.mp4?v=0",
  },
  {
    id: 2,
    link: "https://www.pehrin.com/cdn/shop/videos/c/vp/f9489107fa0244d394c9f600f4b7b1d3/f9489107fa0244d394c9f600f4b7b1d3.HD-1080p-7.2Mbps-49122536.mp4?v=0",
  },
  {
    id: 3,
    link: "https://www.pehrin.com/cdn/shop/videos/c/vp/27362a30a557445c9c05d3fe6c43f4d7/27362a30a557445c9c05d3fe6c43f4d7.HD-1080p-7.2Mbps-49077463.mp4?v=0",
  },
  {
    id: 4,
    link: "https://www.pehrin.com/cdn/shop/videos/c/vp/ed0190dcfbab4455b838c991d3dc68e0/ed0190dcfbab4455b838c991d3dc68e0.HD-1080p-7.2Mbps-49122535.mp4?v=0",
  },
];

const Shorts = () => (
  <section id="shorts" className="shorts-section">
    <h2 className="shorts-title">Trending Shorts</h2>
    <div className="shorts-grid">
      {shorts.map((short, index) => (
        <motion.div
          className="short-card"
          key={short.id}
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <video
            src={short.link}
            controls
            autoPlay
            muted
            loop
            className="short-video"
          />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Shorts;

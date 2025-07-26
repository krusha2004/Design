import React from 'react';
import { motion } from 'framer-motion';
import './Videos.css';

const videos = [
  { id: 1, link: "https://www.youtube.com/embed/eSDw2xBr7Kk?si=lKRjvwr2EPNU-WPz", title: "Haul & Style" },
  { id: 2, link: "https://www.youtube.com/embed/9ONDNNE_kSQ?si=-6tXDiw-ib_GVwlO", title: " Traditional Outfit" },
  { id: 3, link: "https://www.youtube.com/embed/vWGVCz04nnk?si=aBa1b4sZeLclqhIi", title: "Kurti Design" },
  { id: 4, link: "https://www.youtube.com/embed/O88xqWA82Q4?si=Ut_gYmeAbcwhRMuw", title: "New Style" },
  { id: 5, link: "https://www.youtube.com/embed/GOoU9tf2PHQ?si=_TZadIspXNALaRcj", title: "Style Secrets" },
  { id: 6, link: "https://www.youtube.com/embed/f-calNdElFA?si=qSxv3TNgkI0BpDxs", title: "Design Explor" },
];

const VideosSection = () => {
  return (
    <section id='videos' className="videos-section">
      <h2 className="section-title">Watch & Learn</h2>
      <div className="videos-grid">
        {videos.map((video, index) => (
          <motion.div
            className="video-card"
            key={video.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="video-frame-wrapper">
              <iframe
                src={video.link}
                title={`video-${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-title">{video.title}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VideosSection;

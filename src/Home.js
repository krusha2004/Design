import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Videos from "./components/Videos";
import Shorts from "./components/Shorts";
import Trending from "./components/Trending";
import "./App.css"; // Make sure styles for the arrow are here or in a global CSS file
import { FaArrowUp } from "react-icons/fa"; // For arrow icon

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showArrow, setShowArrow] = useState(false);

  const categories = [
    { id: 1, label: "Men" },
    { id: 2, label: "Women" },
    { id: 3, label: "Kids" },
    { id: 4, label: "Accessories" },
  ];

  // Show arrow when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <Navbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      <Categories />
      <Banner />
      <Videos />
      <Shorts />
      <Trending />
      <footer className="footer">
        <p>© 2024 ExploreHub. All rights reserved.</p>
      </footer>

      {/* Scroll-to-top arrow */}
      {showArrow && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Home;

import "../CSS/home.css"
import { useState } from "react";
import heroImage from "../Images/hero-image.JPG";
import homeImage from "../Images/home-image.avif";
import galleryImages from '../components/Gallery.js';

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
 <div className="app-container">

  {/* Hero Section */}
  <section id="home" className="hero">
    <img
      src={heroImage}
      alt="Hero"
      className="hero-image"
    />
    <div className="hero-overlay">
      <h2 className="hero-title">Ruff Ruff Paradise</h2>
      <p className="hero-subtitle">Petcare and More!</p>
    </div>
  </section>

{/* About */}
<section id="about" className="info-section about">
  <div className="info-content">
    <div className="info-left">
      <div className="info-text">
        <h2>About Us</h2>
        <p>
          At Ruff Ruff Paradise, we believe every pet deserves a second
          home filled with love, care, and fun. Our dedicated team is here
          to make sure your furry companions feel safe, happy, and
          well-cared for while you're away.
        </p>
      </div>
    </div>

    <img
      src={homeImage}
      className="info-image"
      alt="Happy pet with caretaker"
    />
  </div>
</section>


  {/* Gallery Section */}
  <section id="gallery" className="gallery-section">
    <h2>Gallery</h2>
    <div className="gallery-grid">
      {galleryImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Gallery ${i + 1}`}
          onClick={() => setSelectedImage(src)}
        />
      ))}
    </div>
  </section>

  {/* Lightbox Overlay */}
  {selectedImage && (
    <div className="lightbox" onClick={() => setSelectedImage(null)}>
      <span className="lightbox-close" onClick={() => setSelectedImage(null)}>
        &times;
      </span>
      <img src={selectedImage} alt="Full" className="lightbox-image" />
    </div>
  )}
       
  </div>
  );
}

export default Home;
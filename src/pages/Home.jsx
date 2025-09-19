import "../CSS/home.css"
import { useState } from "react";

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://static.wixstatic.com/media/968d20_44a171e8df2d4c769e1fbf1895fa5131~mv2_d_4032_3024_s_4_2.jpg/v1/fill/w_984,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/968d20_44a171e8df2d4c769e1fbf1895fa5131~mv2_d_4032_3024_s_4_2.jpg",
    "https://static.wixstatic.com/media/968d20_0ae6217b828d4fe2ac7916ef8a1a8804~mv2_d_3412_1920_s_2.jpg/v1/fill/w_1311,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/968d20_0ae6217b828d4fe2ac7916ef8a1a8804~mv2_d_3412_1920_s_2.jpg",
    "https://static.wixstatic.com/media/968d20_90c9c96f0bf74a7fa6b890c53f42f892~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_554,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/968d20_90c9c96f0bf74a7fa6b890c53f42f892~mv2_d_3024_4032_s_4_2.jpg",
    "https://static.wixstatic.com/media/968d20_ffa3e98dc8394b59964f57a0b94623c3~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_554,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/968d20_ffa3e98dc8394b59964f57a0b94623c3~mv2_d_3024_4032_s_4_2.jpg",
    "https://static.wixstatic.com/media/968d20_291a08064a7f4636889c2a1111f8d7b9~mv2_d_2664_2557_s_4_2.jpg/v1/fill/w_769,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/968d20_291a08064a7f4636889c2a1111f8d7b9~mv2_d_2664_2557_s_4_2.jpg",
    "https://static.wixstatic.com/media/968d20_624513269f9f4c4d895ea8df93f360ce~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_554,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/968d20_624513269f9f4c4d895ea8df93f360ce~mv2_d_3024_4032_s_4_2.jpg",
    "https://static.wixstatic.com/media/968d20_7886591f3124423f8615383624c3cebd~mv2_d_1920_3412_s_2.jpg/v1/fill/w_415,h_738,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/968d20_7886591f3124423f8615383624c3cebd~mv2_d_1920_3412_s_2.jpg",
    "https://static.wixstatic.com/media/968d20_42cc74ebd60648549e693a5b051afc59~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_554,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/968d20_42cc74ebd60648549e693a5b051afc59~mv2_d_3024_4032_s_4_2.jpg",
    "https://static.wixstatic.com/media/968d20_344f6b6b37ed455ab02b1cbb883a03d0~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_554,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/968d20_344f6b6b37ed455ab02b1cbb883a03d0~mv2_d_3024_4032_s_4_2.jpg"

  ];


  return (
 <div className="app-container">

  {/* Hero Section */}
  <section id="home" className="hero">
    <img
      src="https://static.wixstatic.com/media/968d20_41b2d0357b3343bba9d812a51b307664~mv2.jpg/v1/fill/w_728,h_970,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/968d20_41b2d0357b3343bba9d812a51b307664~mv2.jpg"
      alt="Hero"
      className="hero-image"
    />
    <div className="hero-overlay">
      <h2 className="hero-title">Ruff Ruff Paradise</h2>
      <p className="hero-subtitle">Petcare and More!</p>
    </div>
  </section>

  {/* About + Services Section */}
  <section id="about" className="info-section">
    <div className="info-content">
      <div className="info-left">
        <div className="info-text">
          <h2>About Us</h2>
          <p>
            At Ruff Ruff Paradise, we believe every pet deserves a second
            home filled with love, care, and fun. Our dedicated team is here
            to make sure your furry companions feel safe, happy, and
            well-cared for while you’re away.
          </p>
        </div>

  {/* Services Section */}
  <div className="services">
    <h2>Our Services</h2>
    <div className="service-buttons">
      <div className="service-card">
        <img
          src="https://static.wixstatic.com/media/41d000_143c530d12befe41941c124489f9acc2.jpg/v1/fill/w_490,h_340,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/41d000_143c530d12befe41941c124489f9acc2.jpg"
          alt="Grooming"
        />
        <div className="service-label">Grooming</div>
      </div>
      <div className="service-card">
        <img
          src="https://static.wixstatic.com/media/41d000_6a468228ed43d946eb1c746001fee13a.jpg/v1/fill/w_1052,h_701,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/41d000_6a468228ed43d946eb1c746001fee13a.jpg"
          alt="Boarding"
        />
        <div className="service-label">Boarding</div>
      </div>
    </div>
  </div>
  </div>

    <img
      src="https://images.unsplash.com/photo-1558788353-f76d92427f16"
      alt="Happy dog"
      className="info-image"
    />
  </div>
</section>
  {/* Gallery Section */}
  <section id="gallery" className="gallery-section">
    <h2>Gallery</h2>
    <div className="gallery-grid">
      {images.map((src, i) => (
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
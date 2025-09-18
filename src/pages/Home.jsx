import "../CSS/home.css"

function Home() {
  return (
    <div className="app-container">
    {/* Header */}
    <header className="header"> 
      <div className="header-content"> 
        <h1 className="logo">Ruff Ruff Paradise</h1> 
        <nav className="nav-links"> 
          <a href="#home">Home</a> 
          <a href="#about">About</a> 
          <a href="#daycare">Daycare</a> 
          <a href="#grooming">Grooming</a> 
          <a href="#contact">Prices</a> 
        </nav> 
      </div> 
    </header>

    {/* Hero Section */} 
    <section id="home" className="hero"> 
      <img src="https://static.wixstatic.com/media/968d20_41b2d0357b3343bba9d812a51b307664~mv2.jpg/v1/fill/w_728,h_970,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/968d20_41b2d0357b3343bba9d812a51b307664~mv2.jpg" alt="Hero" className="hero-image" /> 
      <div className="hero-overlay"> 
        <h2 className="hero-title">Ruff Ruff Paradise</h2> 
        <p className="hero-subtitle">Petcare and More!</p> 
      </div> 
    </section> 

    {/* About Section */} 
      <section id="about" className="info-section"> 
        <div className="info-content"> 
          <div className="info-text"> 
            <h2>About Us</h2> 
            <p> At Ruff Ruff Paradise, we believe every pet deserves a second home filled with love, care, and fun. Our dedicated team is here to make sure your furry companions feel safe, happy, and well-cared for while you’re away. </p> 
          </div> 
          <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16" alt="Happy dog" className="info-image" /> 
        </div> 
      </section> 

    {/* Daycare Section */} 
      <section id="daycare" className="info-section"> 
        <div className="info-content reverse"> 
          <div className="info-text"> 
            <h2>Daycare Services</h2> 
            <p> Our daycare program is designed to keep your pets active and entertained throughout the day. From playtime to rest areas, your dog will have the best time socializing and being cared for by our experienced staff. </p> 
          </div> 
          <img src="https://images.unsplash.com/photo-1560807707-8cc77767d783" alt="Dogs playing" className="info-image" /> 
        </div> 
      </section> 

    {/* Grooming Section */} 
      <section id="grooming" className="info-section"> 
        <div className="info-content"> 
          <div className="info-text"> 
            <h2>Grooming</h2> 
            <p> Pamper your pets with our grooming services! From baths to stylish cuts, our grooming professionals ensure your furry friend looks and feels their very best. </p> 
          </div> 
          <img src="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Dog grooming" className="info-image" /> 
        </div> 
      </section> 
      
    {/* Footer */} 
    <footer id="contact" className="footer"> 
      <p> © {new Date().getFullYear()} Ruff Ruff Paradise. All rights reserved. </p> 
    </footer> 
      </div>
  );
}

export default Home;
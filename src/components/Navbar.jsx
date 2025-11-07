import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="header"> 
      <div className="header-content"> 
        <div className="logo">
          <img src="https://static.wixstatic.com/media/968d20_5c5ef322e7944df1bbc198b9d8c6616b~mv2.png/v1/fill/w_178,h_178,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/968d20_5c5ef322e7944df1bbc198b9d8c6616b~mv2.png" alt="Ruff Ruff Paradise Logo" className="logo-img" />
          <h1>Ruff Ruff Paradise</h1>
        </div> 
        <nav className="nav-links"> 
          <div>
            <Link to="/">Home</Link>
            <Link to="/Grooming">Pet Grooming</Link>
            <Link to="/Boarding">Boarding</Link>
            <Link to="/Contact">Contact Us</Link>
          </div>
        </nav> 
      </div> 
    </header>
  );
}

export default Navbar;
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.avif';

function Navbar() {
  return (
    <header className="header"> 
      <div className="header-content"> 
        <div className="logo">
          <img src= {logo} alt="Ruff Ruff Paradise Logo" className="logo-img" />
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
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="header"> 
        <div className="header-content"> 
            <h1 className="logo">Ruff Ruff Paradise</h1> 
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
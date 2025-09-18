import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Grooming from './pages/Grooming';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <h2>My React Website</h2>
          <div>
            <Link to="/">Home</Link>
            <Link to="/grooming">Grooming</Link>
          </div>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/grooming" element={<Grooming/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

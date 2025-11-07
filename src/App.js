import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Grooming from './pages/Grooming';
import Boarding from './pages/Boarding';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar /> 

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/grooming" element={<Grooming />} />
            <Route path="/boarding" element={<Boarding />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
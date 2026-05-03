import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DonationProvider } from './context/DonationContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Dashboard from './pages/Dashboard';
import './index.css';

function App() {
  return (
    <DonationProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          
          {/* Footer remains persistent across all pages */}
          <footer className="footer">
            <div className="container">
              <h2>AnnSeva</h2>
              <p className="mb-4" style={{ fontSize: '1.1rem' }}>Making India Hunger Free, One Wedding at a Time</p>
              <p className="mb-8">Made with <span className="heart">❤️</span> in Varanasi</p>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Contact: your.email@gmail.com</p>
            </div>
          </footer>
        </div>
      </Router>
    </DonationProvider>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Camera, ShieldCheck, Smartphone, Utensils, Building } from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero">
        <div className="container hero-content">
          <h1>AnnSeva</h1>
          <p className="tagline mb-4">Rescuing Leftover Food from Weddings & Functions</p>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)' }}>To Feed the Hungry & Needy</p>
          <div className="hero-buttons">
            <Link to="/donate" className="btn btn-primary">
              Donate Food Now
            </Link>
            <Link to="/dashboard" className="btn btn-secondary">
              I Need Food Help
            </Link>
          </div>
        </div>
      </header>

      {/* Problem & Solution */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="grid-3">
            <div className="glass-card" style={{ gridColumn: 'span 1' }}>
              <h2 className="mb-4" style={{ color: '#047857', fontSize: '2rem' }}>The Problem</h2>
              <p style={{ fontSize: '1.1rem', color: '#475569' }}>
                India mein har saal bahut saara khana weddings aur functions mein waste ho jata hai, 
                jabki dusri taraf log bhookhe sote hain.
              </p>
            </div>
            <div className="glass-card" style={{ gridColumn: 'span 2', background: '#ecfdf5', borderColor: '#d1fae5' }}>
              <h2 className="mb-4" style={{ color: '#047857', fontSize: '2rem' }}>Our Solution</h2>
              <p style={{ fontSize: '1.2rem', color: '#334155' }}>
                <strong>AnnSeva</strong> ek platform hai jo wedding/functions ke leftover food ko 
                NGOs, orphanages aur zaruratmand logon tak safely pahunchata hai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-12" style={{ color: '#047857', fontSize: '2.5rem' }}>How It Works</h2>
          <div className="grid-3">
            <div className="feature-card">
              <div className="feature-icon">
                <Utensils size={32} />
              </div>
              <h3 className="mb-2">1. Donor Posts</h3>
              <p>Wedding organizer ya caterer leftover food ki details daalte hain</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Building size={32} />
              </div>
              <h3 className="mb-2">2. Nearby NGOs</h3>
              <p>NGOs aur volunteers ko instant notification jaata hai</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Heart size={32} />
              </div>
              <h3 className="mb-2">3. Food Pickup</h3>
              <p>Food safely pick kiya jata hai aur needy logon tak pahunchaya jata hai</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section" style={{ background: '#f1f5f9' }}>
        <div className="container">
          <h2 className="text-center mb-12" style={{ color: '#047857', fontSize: '2.5rem' }}>Key Features</h2>
          <div className="grid-4">
            <div className="feature-card" style={{ padding: '30px 20px' }}>
              <MapPin size={40} className="mb-4" style={{ color: '#10B981', margin: '0 auto' }} />
              <h3 className="mb-2" style={{ fontSize: '1.2rem' }}>Location Based</h3>
              <p style={{ fontSize: '0.9rem' }}>Nearby donors aur receivers ko match karta hai</p>
            </div>
            <div className="feature-card" style={{ padding: '30px 20px' }}>
              <Camera size={40} className="mb-4" style={{ color: '#10B981', margin: '0 auto' }} />
              <h3 className="mb-2" style={{ fontSize: '1.2rem' }}>Food Photos</h3>
              <p style={{ fontSize: '0.9rem' }}>Donor food ki photo upload kar sakte hain</p>
            </div>
            <div className="feature-card" style={{ padding: '30px 20px' }}>
              <ShieldCheck size={40} className="mb-4" style={{ color: '#10B981', margin: '0 auto' }} />
              <h3 className="mb-2" style={{ fontSize: '1.2rem' }}>Verification</h3>
              <p style={{ fontSize: '0.9rem' }}>NGOs aur donors ko verify kiya jata hai</p>
            </div>
            <div className="feature-card" style={{ padding: '30px 20px' }}>
              <Smartphone size={40} className="mb-4" style={{ color: '#10B981', margin: '0 auto' }} />
              <h3 className="mb-2" style={{ fontSize: '1.2rem' }}>Easy to Use</h3>
              <p style={{ fontSize: '0.9rem' }}>Simple interface for everyone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section impact-section">
        <div className="container">
          <h2 className="text-center mb-12" style={{ fontSize: '2.5rem' }}>Our Impact</h2>
          <div className="grid-4">
            <div className="impact-card">
              <h3>500+</h3>
              <p>Meals Distributed</p>
            </div>
            <div className="impact-card">
              <h3>50+</h3>
              <p>Events Covered</p>
            </div>
            <div className="impact-card">
              <h3>15+</h3>
              <p>NGO Partners</p>
            </div>
            <div className="impact-card">
              <h3>2000kg+</h3>
              <p>Food Saved</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

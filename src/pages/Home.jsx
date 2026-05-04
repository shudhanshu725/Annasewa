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
                Every year in India, a massive amount of food is wasted at weddings and functions, 
                while on the other hand, many people go to sleep hungry.
              </p>
            </div>
            <div className="glass-card" style={{ gridColumn: 'span 2', background: '#ecfdf5', borderColor: '#d1fae5' }}>
              <h2 className="mb-4" style={{ color: '#047857', fontSize: '2rem' }}>Our Solution</h2>
              <p style={{ fontSize: '1.2rem', color: '#334155' }}>
                <strong>AnnSeva</strong> is a platform that safely delivers leftover food from weddings and functions 
                to NGOs, orphanages, and people in need.
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
              <p>Wedding organizers or caterers post details of leftover food</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Building size={32} />
              </div>
              <h3 className="mb-2">2. Nearby NGOs</h3>
              <p>NGOs and volunteers receive instant notifications</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Heart size={32} />
              </div>
              <h3 className="mb-2">3. Food Pickup</h3>
              <p>Food is safely picked up and delivered to needy people</p>
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
              <p style={{ fontSize: '0.9rem' }}>Matches nearby donors and receivers</p>
            </div>
            <div className="feature-card" style={{ padding: '30px 20px' }}>
              <Camera size={40} className="mb-4" style={{ color: '#10B981', margin: '0 auto' }} />
              <h3 className="mb-2" style={{ fontSize: '1.2rem' }}>Food Photos</h3>
              <p style={{ fontSize: '0.9rem' }}>Donors can upload photos of the food</p>
            </div>
            <div className="feature-card" style={{ padding: '30px 20px' }}>
              <ShieldCheck size={40} className="mb-4" style={{ color: '#10B981', margin: '0 auto' }} />
              <h3 className="mb-2" style={{ fontSize: '1.2rem' }}>Verification</h3>
              <p style={{ fontSize: '0.9rem' }}>NGOs and donors are verified</p>
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

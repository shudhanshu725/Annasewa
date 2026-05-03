import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Utensils, MapPin, Phone, Users } from 'lucide-react';
import { useDonations } from '../context/DonationContext';

const Donate = () => {
  const { addDonation } = useDonations();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    foodType: '',
    quantity: '',
    location: '',
    contact: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.foodType || !formData.quantity || !formData.location || !formData.contact) {
      alert("Please fill all fields");
      return;
    }
    
    addDonation(formData);
    alert("Donation posted successfully! Thank you for your service.");
    navigate('/dashboard');
  };

  return (
    <div className="section" style={{ minHeight: 'calc(100vh - 80px)' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <div className="glass-card">
          <h2 className="text-center mb-8" style={{ color: '#047857', fontSize: '2.5rem' }}>Donate Leftover Food</h2>
          <p className="text-center mb-8">
            Fill out the details below to notify nearby NGOs and volunteers about available food.
          </p>
          
          <form onSubmit={handleSubmit} className="donate-form">
            <div className="form-group mb-4">
              <label className="form-label">
                <Utensils size={18} /> Food Details
              </label>
              <input 
                type="text" 
                name="foodType"
                value={formData.foodType}
                onChange={handleChange}
                placeholder="e.g. Rice, Dal, Paneer Curry" 
                className="form-control"
              />
            </div>
            
            <div className="form-group mb-4">
              <label className="form-label">
                <Users size={18} /> Approximate Quantity
              </label>
              <input 
                type="text" 
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. Can feed 50 people" 
                className="form-control"
              />
            </div>
            
            <div className="form-group mb-4">
              <label className="form-label">
                <MapPin size={18} /> Pickup Location
              </label>
              <input 
                type="text" 
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Sigra, Varanasi" 
                className="form-control"
              />
            </div>
            
            <div className="form-group mb-8">
              <label className="form-label">
                <Phone size={18} /> Contact Number
              </label>
              <input 
                type="tel" 
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Your phone number" 
                className="form-control"
              />
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px' }}>
              Post Donation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donate;

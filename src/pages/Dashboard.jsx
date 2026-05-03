import React from 'react';
import { useDonations } from '../context/DonationContext';
import { Clock, MapPin, Phone, Users, Utensils, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const { donations, claimDonation } = useDonations();

  return (
    <div className="section" style={{ minHeight: 'calc(100vh - 80px)', background: '#f8fafc' }}>
      <div className="container">
        <h2 className="text-center mb-12" style={{ color: '#047857', fontSize: '2.5rem' }}>NGO Dashboard</h2>
        
        {donations.length === 0 ? (
          <div className="text-center" style={{ padding: '40px', background: 'white', borderRadius: '15px' }}>
            <p>No food donations available at the moment.</p>
          </div>
        ) : (
          <div className="grid-3">
            {donations.map((donation) => (
              <div 
                key={donation.id} 
                className="glass-card" 
                style={{ 
                  padding: '30px',
                  opacity: donation.status === 'claimed' ? 0.7 : 1,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {donation.status === 'claimed' && (
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '-30px',
                    background: '#10B981',
                    color: 'white',
                    padding: '5px 40px',
                    transform: 'rotate(45deg)',
                    fontWeight: 'bold',
                    fontSize: '0.8rem'
                  }}>
                    CLAIMED
                  </div>
                )}
                
                <h3 className="mb-4" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Utensils size={24} color="#F59E0B" />
                  {donation.foodType}
                </h3>
                
                <div className="mb-2" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#475569' }}>
                  <Users size={18} /> <span>{donation.quantity}</span>
                </div>
                
                <div className="mb-2" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#475569' }}>
                  <MapPin size={18} /> <span>{donation.location}</span>
                </div>
                
                <div className="mb-4" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#475569' }}>
                  <Phone size={18} /> <span>{donation.contact}</span>
                </div>
                
                <div className="mb-6" style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Clock size={14} /> Posted: {new Date(donation.timestamp).toLocaleString()}
                </div>
                
                {donation.status === 'available' ? (
                  <button 
                    onClick={() => claimDonation(donation.id)}
                    className="btn btn-primary" 
                    style={{ width: '100%', padding: '12px' }}
                  >
                    Claim Food
                  </button>
                ) : (
                  <button 
                    disabled
                    className="btn" 
                    style={{ width: '100%', padding: '12px', background: '#e2e8f0', color: '#64748b', cursor: 'not-allowed' }}
                  >
                    <CheckCircle size={18} style={{ marginRight: '8px' }} /> Picked Up
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

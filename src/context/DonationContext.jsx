import React, { createContext, useState, useContext, useEffect } from 'react';

const DonationContext = createContext();

export const useDonations = () => useContext(DonationContext);

export const DonationProvider = ({ children }) => {
  // Try to load from localStorage, otherwise use default mock data
  const [donations, setDonations] = useState(() => {
    const saved = localStorage.getItem('annseva_donations');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      {
        id: '1',
        foodType: 'Buffet Leftovers (Roti, Dal, Paneer)',
        quantity: 'Feeds ~50 people',
        location: 'Lanka, Varanasi',
        contact: '9876543210',
        status: 'available',
        timestamp: new Date().toISOString()
      },
      {
        id: '2',
        foodType: 'Sweets & Desserts',
        quantity: 'Feeds ~20 people',
        location: 'Sigra, Varanasi',
        contact: '9876543211',
        status: 'claimed',
        timestamp: new Date(Date.now() - 86400000).toISOString()
      }
    ];
  });

  // Save to localStorage whenever donations change
  useEffect(() => {
    localStorage.setItem('annseva_donations', JSON.stringify(donations));
  }, [donations]);

  const addDonation = (newDonation) => {
    setDonations([
      {
        ...newDonation,
        id: Date.now().toString(),
        status: 'available',
        timestamp: new Date().toISOString()
      },
      ...donations
    ]);
  };

  const claimDonation = (id) => {
    setDonations(donations.map(don => 
      don.id === id ? { ...don, status: 'claimed' } : don
    ));
  };

  return (
    <DonationContext.Provider value={{ donations, addDonation, claimDonation }}>
      {children}
    </DonationContext.Provider>
  );
};

import React, { createContext, useState, useContext, useEffect } from 'react';

const DonationContext = createContext();

export const useDonations = () => useContext(DonationContext);

export const DonationProvider = ({ children }) => {
  // Load from localStorage, start empty if nothing saved
  const [donations, setDonations] = useState(() => {
    const saved = localStorage.getItem('annseva_donations');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
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

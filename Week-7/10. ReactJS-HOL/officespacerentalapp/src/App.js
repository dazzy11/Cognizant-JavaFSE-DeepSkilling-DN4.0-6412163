import React from 'react';

function App() {
  const office = {
    name: "DBS",
    rent: 50000,
    address: "Chennai",
    image: "/office.jpeg" 
  };

  const rentStyle = {
    color: office.rent <= 60000 ? 'red' : 'green',
    fontWeight: 'bold'
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Office Space , at Affordable Range</h1>

      <img src={office.image} alt="Office Space" style={{ width: '300px', margin: '20px 0' }} />

      <h2 style={{ fontWeight: 'bold' }}>Name: {office.name}</h2>
      <p style={rentStyle}>Rent: Rs. {office.rent}</p>
      <p style={{ fontWeight: 'bold' }}>Address: {office.address}</p>
    </div>
  );
}

export default App;

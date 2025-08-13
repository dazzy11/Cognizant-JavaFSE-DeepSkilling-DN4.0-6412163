import React from 'react';

const SyntheticButton = () => {
  const handlePress = (event) => {
    alert("I was clicked");
    console.log("Synthetic Event Type:", event.type);
  };

  return (
    <div>
      <button onClick={handlePress}>Synthetic OnPress</button>
    </div>
  );
};

export default SyntheticButton; 
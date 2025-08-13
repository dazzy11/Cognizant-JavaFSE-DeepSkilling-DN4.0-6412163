import React from 'react';

const WelcomeButton = () => {
  const sayMessage = (msg) => {
    alert("Message: " + msg);
  };

  return (
    <div>
      <button onClick={() => sayMessage("welcome")}>Say Welcome</button>
    </div>
  );
};

export default WelcomeButton;

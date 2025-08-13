import React from 'react';

const IndianPlayers = () => {
  const team = ['Virat', 'Rohit', 'Dhoni', 'Jadeja', 'Ashwin', 'Gill'];

  // Destructure Odd and Even team members
  const [odd1, even1, odd2, even2, odd3, even3] = team;

  const oddTeam = [odd1, odd2, odd3];
  const evenTeam = [even1, even2, even3];

  // Merge two arrays
  const T20players = ['Surya', 'Hardik'];
  const RanjiTrophyPlayers = ['Pujara', 'Rahane'];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers]; // ES6 spread operator

  return (
    <div>
      <h2>Odd Team</h2>
      <ul>
        {oddTeam.map((player, i) => <li key={i}>{player}</li>)}
      </ul>

      <h2>Even Team</h2>
      <ul>
        {evenTeam.map((player, i) => <li key={i}>{player}</li>)}
      </ul>

      <h2>Merged T20 and Ranji Players</h2>
      <ul>
        {mergedPlayers.map((player, i) => <li key={i}>{player}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;

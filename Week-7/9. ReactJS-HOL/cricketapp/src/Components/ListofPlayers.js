import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 85 },
    { name: 'Rohit', score: 95 },
    { name: 'Dhoni', score: 60 },
    { name: 'KL Rahul', score: 45 },
    { name: 'Jadeja', score: 75 },
    { name: 'Ashwin', score: 80 },
    { name: 'Bumrah', score: 40 },
    { name: 'Shami', score: 67 },
    { name: 'Gill', score: 90 },
    { name: 'Surya', score: 78 },
    { name: 'Hardik', score: 50 }
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;

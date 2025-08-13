import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    { name: 'React Basics', trainer: 'John Doe', status: 'ongoing' },
    { name: 'Advanced JS', trainer: 'Jane Smith', status: 'completed' }
  ];

  return (
    <div className="App">
      {cohorts.map((cohort, index) => (
        <CohortDetails
          key={index}
          name={cohort.name}
          trainer={cohort.trainer}
          status={cohort.status}
        />
      ))}
    </div>
  );
}

export default App;

import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ name, trainer, status }) => {
  const headingStyle = {
    color: status === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>Cohort: {name}</h3>
      <dl>
        <dt>Trainer</dt>
        <dd>{trainer}</dd>
        <dt>Status</dt>
        <dd>{status}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;

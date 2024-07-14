import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  
  return (
    <header className = 'header'>
      <FontAwesomeIcon icon={faReceipt} style={{ marginRight: '20px' }} />
      BUDGET TRACKER
    </header>
  );
}

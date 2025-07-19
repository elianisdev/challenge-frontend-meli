import React from 'react';
import './Loading.scss';

export const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__spinner"></div>
      <span className="loading__text">Loading...</span>
    </div>
  );
};

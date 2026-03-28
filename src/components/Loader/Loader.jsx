import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader${hidden ? ' hide' : ''}`}>
      <div className="loader-inner">
        <div className="loader-logo">
          BuildX <span>Studio</span>
        </div>
        <div className="loader-bar">
          <div className="loader-fill" />
        </div>
      </div>
    </div>
  );
};

export default Loader;

import React from 'react';
import './ColorExplanation.css';

const ColorExplanation = () => {
  return (
    <div className="explanation">
      <div><span className="color-box green"></span> Correct letter and position</div>
      <div><span className="color-box yellow"></span> Correct letter, wrong position</div>
      <div><span className="color-box black"></span> Incorrect letter</div>
    </div>
  );
};

export default ColorExplanation;

import React, { useState } from 'react';
import styles from './GuessInput.module.css';

const GuessInput = ({ onSubmit, length }) => {
  const [guess, setGuess] = useState('');

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.trim() === '') {
      return;
    }
    onSubmit(guess);
    setGuess('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={guess}
        onChange={handleChange}
        maxLength={length}
        placeholder="Enter your guess"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
};

export default GuessInput;

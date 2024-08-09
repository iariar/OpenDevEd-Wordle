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
        className={styles.custom_input}
      />
      <button type="submit" className={styles.custom_button}>Guess</button>

    </form>
  );
};

export default GuessInput;

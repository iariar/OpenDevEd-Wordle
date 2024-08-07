import React, { useState, useEffect } from 'react';
import GuessInput from './components/GuessInput';
import GuessList from './components/GuessList';
import GameStatus from './components/GameStatus';
import { generate } from "random-words";

import './App.css';

const word = generate({ exactly: 1 })[0]
console.log(
  word
);

const App = () => {
  const [targetWord, setTargetWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [attemptsLeft, setAttemptsLeft] = useState(6);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setTargetWord(word);
  }, []);

  const handleGuess = (guess) => {
    if (gameOver) return;


    const feedback = getFeedback(guess);
    setGuesses([...guesses, { word: guess, feedback }]);
    setAttemptsLeft(attemptsLeft - 1);

    if (guess === targetWord) {
      setGameOver(true);
      setMessage('Congratulations! You guessed the word!');
    } else if (attemptsLeft - 1 === 0) {
      setGameOver(true);
      setMessage(`Game Over! The word was ${targetWord}.`);
    }
  };

  const getFeedback = (guess) => {
    let feedback = [];

    for (let i = 0; i < targetWord.length; i++) {
      if (guess[i] === targetWord[i]) {
        feedback.push('green');
      } else if (targetWord.includes(guess[i])) {
        feedback.push('yellow');
      } else {
        feedback.push('black');
      }
    }

    return feedback;
  };

  return (
    <div>
      <h1>Wordle Game</h1>
      <GuessInput onSubmit={handleGuess} length={targetWord.length} />
      <GuessList guesses={guesses} />
      <GameStatus attemptsLeft={attemptsLeft} gameOver={gameOver} message={message} />
    </div>
  );
};

export default App;

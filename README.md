# OpenDevEd-Wordle
## How to run
    - Go to project directory
    - Run `npm install`
    - Run `npm start`


## Wordle Game
 # Approach
  # State Management
    - I generate a random 5-letter word at the start of the game, store the User Guesses and Results and manage them in the state. Feedback is calculated and displayed based on the user's guesses.
    - I track the remaining Attempts and update them with each guess to manage the game’s progress.

  # User Interaction
    - I Capture User Input and Validate that it is exactly 5 letters long and alphabetic.
    - I display an error message for invalid inputs.
    - I processes each guess, update the game state, and provide feedback.
    - I end the game and prompt a retry button if the number of attempts reaches 0.

 # Additional features
   # Confetti Animation:
     - A celebratory confetti animation is displayed upon winning the game as a visual reward for guessing the correct word.

   # Retry Functionality:
     - Allows users to restart the game with a new target word and reset all game states, providing a way to play multiple rounds
   # Color Explanation Feature:
     - A clear explanation of the color feedback used in the game indicating what each color represents (green for correct letters in correct positions, yellow for correct letters in wrong positions, and black for incorrect letters).

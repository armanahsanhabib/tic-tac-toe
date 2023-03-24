import React, { useEffect, useState } from 'react';
import './assets/css/App.css';
import Board from './components/Board';
import calculateWinner from './components/CalculateWinner';
import Footer from './components/Footer';
import Header from './components/Header';
import PopupMsg from './components/PopupMsg';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([squares]);
  const [xIsNext, setXIsNext] = useState(true);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [demo, setDemo] = useState(false);

  // Dark Mode Class Toggle
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Calculate Winner
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  // Handle Click
  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const newSquares = squares.slice();
    xIsNext ? newSquares[i] = "X" : newSquares[i] = "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    // Add to History
    const newHistory = history.slice();
    newHistory.push(newSquares);
    setHistory(newHistory);

    // Set History Index
    setHistoryIndex(historyIndex + 1);
  }

  // Handle Previous Turn
  const handlePreviousTurn = () => {
    if (historyIndex === 0 || historyIndex === null) {
      return;
    } else {
      setSquares(history[historyIndex - 1]);
      setHistoryIndex(historyIndex - 1);
      setXIsNext(!xIsNext);
    }
  }

  // Handle Next Turn
  const handleNextTurn = () => {
    if (historyIndex + 1 === history.length) {
      return;
    } else {
      setSquares(history[historyIndex + 1]);
      setHistoryIndex(historyIndex + 1);
      setXIsNext(!xIsNext);
    }
  }

  // Handle Reset
  const handleReset = () => {
    const resetSquares = [...squares].fill(null);
    setSquares(resetSquares);

    const resetHistory = [Array(9).fill(null)];
    setHistory(resetHistory);

    setHistoryIndex(0);
    setXIsNext(true);

    setDemo(true);

    setTimeout(() => {
      setDemo(false);
    }, 1500);
  }

  return (
    <div className='h-screen bg-gray-300 dark:bg-gray-500'>
      <div className='h-screen max-w-xl mx-auto bg-gray-100 dark:bg-gray-800 shadow-lg flex flex-col justify-between'>
        <div className={``}>
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Board squares={squares} xIsNext={xIsNext} status={status} handleClick={handleClick} handleReset={handleReset} handlePreviousTurn={handlePreviousTurn} handleNextTurn={handleNextTurn} />
          {demo && <PopupMsg msg="Game Reseted." />}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
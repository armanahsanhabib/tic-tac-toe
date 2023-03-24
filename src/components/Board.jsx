import React, { useState } from 'react';
import calculateWinner from './CalculateWinner';
import GameDisplay from './GameDisplay';
import Square from './Square';

const Board = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (i) => {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const newSquares = squares.slice();

        xIsNext ? newSquares[i] = "X" : newSquares[i] = "O";

        setSquares(newSquares);

        setXIsNext(!xIsNext);
    }

    const handleReset = () => {
        const reset = [...squares].fill(null);
        setSquares(reset);
    }

    return (
        <div className='bg-gray-100 dark:bg-gray-800'>
            <GameDisplay squares={squares} xIsNext={xIsNext} />
            <div className="board container flex justify-center align-center px-6 pt-12">
                <div className="w-max h-max bg-gray-300 dark:bg-gray-700 board grid grid-cols-3 gap-2">
                    {
                        squares.map((value, index) =>
                            <Square
                                value={value}
                                onSquareClick={() => handleClick(index)}
                            />
                        )
                    }
                </div>
            </div>
            <div className="btn-container flex justify-center py-12">
                <button
                    className='justify-center bg-slate-300 text-slate-800 hover:bg-red-500 hover:text-slate-50 dark:bg-slate-600 dark:text-slate-50 dark:hover:bg-red-500 px-4 py-2 rounded font-bold'
                    onClick={() => handleReset()}
                >
                    Reset Game
                </button>
            </div>
        </div>
    );
};

export default Board;

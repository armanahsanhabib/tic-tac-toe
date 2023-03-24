import React from 'react';
import { BiRedo, BiUndo } from 'react-icons/bi';

const GameDisplay = (props) => {
    return (
        <div className='bg-slate-200 dark:bg-slate-900 flex items-center justify-center py-16'>
            <div className="container px-6 text-center">
                <h1 className='text-4xl font-bold mb-6 text-slate-900 dark:text-slate-50'>
                    {props.status}
                </h1>
                <div className="time-travel flex justify-center">
                    <button
                        onClick={() => props.handlePreviousTurn()}
                        className="flex items-center text-sm mr-2 bg-slate-800 text-slate-50 hover:bg-blue-600 dark:bg-slate-200 dark:text-slate-800 dark:hover:bg-blue-600 dark:hover:text-slate-50 px-4 py-2 rounded font-bold"
                    >
                        <BiUndo className='mr-2 text-xl' />
                        <span>Previous Turn</span>
                    </button>
                    <button
                        onClick={() => props.handleNextTurn()}
                        className="flex items-center ml-2 text-sm bg-slate-800 text-slate-50 hover:bg-blue-600 dark:bg-slate-200 dark:text-slate-800 dark:hover:bg-blue-600 dark:hover:text-slate-50 px-4 py-2 rounded font-bold"
                    >
                        <BiRedo className='mr-2 text-xl' />
                        <span>Next Turn</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GameDisplay;
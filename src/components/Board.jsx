import GameDisplay from './GameDisplay';
import Square from './Square';

const Board = (props) => {
    return (
        <div className='bg-gray-100 dark:bg-gray-800'>
            <GameDisplay squares={props.squares} xIsNext={props.xIsNext} status={props.status} handlePreviousTurn={props.handlePreviousTurn} handleNextTurn={props.handleNextTurn} />
            <div className="board container flex justify-center align-center px-6 pt-12">
                <div className="w-max h-max bg-gray-300 dark:bg-gray-700 board grid grid-cols-3 gap-2">
                    {
                        props.squares.map((value, index) =>
                            <Square
                                value={value}
                                onSquareClick={() => props.handleClick(index)}
                                key={index}
                            />
                        )
                    }
                </div>
            </div>
            <div className="container flex justify-center py-12">
                <button
                    className='justify-center bg-slate-300 text-slate-800 hover:bg-red-500 hover:text-slate-50 dark:bg-slate-600 dark:text-slate-50 dark:hover:bg-red-500 px-4 py-2 rounded font-bold'
                    onClick={() => props.handleReset()}
                >
                    Reset Game
                </button>
            </div>
        </div>
    );
};

export default Board;

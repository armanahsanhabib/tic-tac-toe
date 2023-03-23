const Square = (props) => {
    return (
        <>
            <div
                className="w-24 h-24 dark:text-slate-200 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-5xl font-bold cursor-pointer select-none"
                onClick={props.onSquareClick}
                style={{ color: `${props.value === 'X' ? '#00c6ff' : '#ff5d00'}` }}
            >
                {props.value}
            </div>
            {/*             <div
                className="w-24 h-24 dark:text-slate-200 bg-slate-50 dark:bg-gray-700 rounded-lg outline outline-1 outline-slate-300 dark:outline-slate-900 flex items-center justify-center text-4xl font-bold cursor-pointer select-none"
                onClick={props.onSquareClick}
            >
                {props.value}
            </div> */}
        </>
    );
};

export default Square;
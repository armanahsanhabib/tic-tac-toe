import React from 'react';

const PopupMsg = (props) => {
    return (
        <div className="flex justify-center w-full fixed top-10 left-0 right-0 z-50 ease-in-out duration-300">
            <div className='w-max bg-white outline outline-1 outline-slate-300 text-slate-500 px-6 py-3 rounded'>
                <p className='text-sm'>{props.msg}</p>
            </div>
        </div>
    );
};

export default PopupMsg;
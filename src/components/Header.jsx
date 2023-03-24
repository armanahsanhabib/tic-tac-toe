import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import logoImage from '../assets/img/logo.png';

const Header = (props) => {
    return (
        <header className='bg-slate-50 dark:bg-slate-800 shadow-lg'>
            <div className="container flex items-center px-6 py-4">
                <img
                    src={logoImage}
                    alt="LOGO"
                    className='h-8 w-8 mr-2'
                />
                <h1 className='text-xl font-bold text-slate-900 dark:text-slate-50'>
                    Tic-Tac-Toe Game
                </h1>
                <div
                    onClick={() => props.setIsDarkMode(!props.isDarkMode)}
                    className='ml-auto text-xl text-slate-900 dark:text-slate-50 cursor-pointer'
                >
                    {props.isDarkMode ? <FaSun /> : <FaMoon />}
                </div>
            </div>
        </header>
    );
};

export default Header;
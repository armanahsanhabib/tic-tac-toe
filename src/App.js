import React, { useEffect, useState } from 'react';
import './assets/css/App.css';
import Board from './components/Board';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className='xl:flex xl:h-screen'>
      <div className='xl:w-3/12 mx-auto my-auto xl:shadow-lg xl:outline xl:outline-2 xl:outline-slate-300 xl:rounded-xl overflow-hidden'>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Board />
        <Footer />
      </div>
    </div>
  );
};

export default App;
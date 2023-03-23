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
    <div className='h-screen bg-slate-50'>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Board />
      <Footer />
    </div>
  );
};

export default App;
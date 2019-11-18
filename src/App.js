import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './Logo.js';
import TitleImage from './TitleImage.js';
import Header from './Header.js';


function App() {
  return (
    <div className="App">
      <header>
        <Logo/>
        <Header/>
      </header>
      <main>
        <TitleImage/>
      </main>
      
    </div>
  );
}

export default App;

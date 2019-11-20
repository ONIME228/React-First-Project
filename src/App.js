import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo/Logo.js';
import TitleImage from './components/TitleImage/TitleImage.js';
import Header from './components/Header/Header.js';
import FirstColumn from './components/FirstColumn/FirstColumn';
import SecondColumn from './components/SecondColumn/SecondColumn';


function App() {
  return (
    <div className="App">
      <header>
        <Logo/>
        <Header/>
      </header>
      <main>
        <TitleImage/>
        <div className="main-page">
          <FirstColumn/>
          <SecondColumn/>
        </div>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo/Logo.js';
import TitleImage from './components/TitleImage/TitleImage.js';
import Header from './components/Header/Header.js';
import FirstColumn from './components/FirstColumn/FirstColumn';
import SecondColumn from './components/SecondColumn/SecondColumn';
import ThirdColumn from './components/ThirdColumn/ThirdColumn';
import InstaSheets from './components/InstaSheets/InstaSheets';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <header>
        <Logo/>
        <Header/>
      </header>
      <main>
        <TitleImage/>
        <div className="main-page">
          <FirstColumn/>
          <SecondColumn/>
          <ThirdColumn/>
        </div>
        <InstaSheets/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;

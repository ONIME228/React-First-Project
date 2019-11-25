import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo/Logo.js';
import TitleImage from './components/TitleImage/TitleImage.js';
import Header from './components/Header/Header.js';
import MainPageLeftBox from './components/MainPageLeftBox/MainPageLeftBox';
import MainPageCenterBox from './components/MainPageCenterBox/MainPageCenterBox';
import MainPageRightBox from './components/MainPageRightBox/MainPageRightBox';
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
          <MainPageLeftBox/>
          <MainPageCenterBox/>
          <MainPageRightBox/>
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

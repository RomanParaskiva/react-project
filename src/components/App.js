import React from 'react';
import '../css/App.css';
import Footer from './Footer/Footer';
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import MenuBtn from "./MainContent/MenuBtn";


const App = () => (
    <div className="App">
      <Header/>
      <MainContent />
      <Footer />
      <MenuBtn/>
    </div>
);
export default App;

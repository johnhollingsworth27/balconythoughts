import React from 'react';
import './App.css';

import Header from './components/header';
import Navbar from './components/navbar';
import Banner from './components/banner';
import JournalEntry from './JournalEntry';
import Home from './components/home';
import Footer from './components/footer';
//import Head from './components/head/head';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Home />
      <JournalEntry />
      <Footer />
      
      <div id="content"></div>
    </div>
  );
}

export default App;


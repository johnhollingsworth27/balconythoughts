import React from 'react';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Banner from './components/banner';
import JournalEntry from './JournalEntry';
//import Head from './components/head/head';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <JournalEntry />
      <Navbar />
      
      <div id="content"></div>
    </div>
  );
}

export default App;


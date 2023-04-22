// src/pages/JournalEntryPage.js
import React from 'react';
import Navbar from '../components/navbar';
import Header from '../components/header';
import JournalEntry from '../JournalEntry';
import Footer from '../components/footer';

const JournalEntryPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <JournalEntry />
      <Footer />
    </div>
  );
};

export default JournalEntryPage;

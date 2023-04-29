// src/pages/JournalEntryPage.js
import React from 'react';
import Navbar from '../components/navbar';
import Header from '../components/header';
import JournalEntry from '../JournalEntry';
import Footer from '../components/footer';
//there is a footer on the page but idk how?



const JournalEntryPage = () => {
  return (
    <div>
      <Navbar />
      
      <JournalEntry />


      <section data-bs-version="5.1" className="header1 cid-s48MCQYojq" id="header1-f">
        <div className="mbr-overlay" style={{ opacity: 0.3, backgroundColor: 'rgb(255, 255, 255)' }}></div>
        <div className="align-center container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  );
};

export default JournalEntryPage;

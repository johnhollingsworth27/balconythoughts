import React from 'react';
import '../styles/style.css';
import '../styles/bootstrap-grid.min.css';
import '../styles/bootstrap-reboot.min.css';
import Navbar from './navbar';
import Header from './header';
import GitHubCalendar from "react-github-calendar";
import Taskboard from './taskboard';

const Home = () => {

  const h1Style = {
    marginLeft: '1in',
    marginRight: '1in',
  };

  return (
    <div>
      <Navbar />

      <section data-bs-version="5.1" className="header1 cid-tA2E9yc2OJ2" id="header1-2p">
                <div className="mbr-overlay" style={{ opacity: 0.3, backgroundColor: 'rgb(255, 255, 255)' }}></div>

                <div className="align-center container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-9">
                            <h1 className="mbr-section-title mbr-fonts-style mb-3 display-1">
                                <strong>balconythoughts</strong>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
      
      


      <section data-bs-version="5.1" className="content7 cid-tA2rnsadC2" id="content7-2l">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              <blockquote>
                <h5 className="mbr-section-title mbr-fonts-style mb-2 display-2"><strong>Welcome</strong></h5>
                <p className="mbr-text mbr-fonts-style display-4">
                  <br />Welcome to balconythoughts, a digital canvas that represents my ever-evolving journey through life as John Hollingsworth. <br /><br />Drawing inspiration from Mac Miller, this website stands as a testament to my years of personal growth and the power of exploration throughout my life. Delve into this virtual space to explore the diverse range of passions, experiences, and interests that have shaped who I am today. <br /><br />BalconyThoughts is more than just a static collection of my thoughts; it's a celebration of the continuous pursuit of knowledge and self-awareness. Join me in this ongoing voyage as we navigate the complexities and intricacies of life.<br /><br /><br />
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>


      <section data-bs-version="5.1" className="header1 cid-s48MCQYojq" id="header1-f">
        <div className="mbr-overlay" style={{ opacity: 0.3, backgroundColor: 'rgb(255, 255, 255)' }}></div>
        <div className="align-center container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
            </div>
          </div>
        </div>
      </section>

      <section className="display-7" style={{ padding: 0, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', alignContent: 'center', display: 'flex', position: 'relative', height: '0rem' }}>
      </section>

      <div className="calendar-container">
        <GitHubCalendar username="johnhollingsworth27" />
        
      </div>
      <Taskboard />

      


    </div>

    
  );
};

export default Home;

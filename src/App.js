import Header from './components/header';
import Academics from './components/academics';
import Navbar from './components/navbar';
import Banner from './components/banner';
import JournalEntry from './JournalEntry';
import Home from './components/home';
import Footer from './components/footer';
//import Head from './components/head/head';
import { AspectRatio } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Header />
      <Home />
      <JournalEntry />
      <AspectRatio ratio={25 / 6}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6604203.706736092!2d-122.475989!3d37.757679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1640821233277!5m2!1sen!2sng"
          title="Northern California Map"
          allowFullScreen
        />
      </AspectRatio>
      <Academics/>
      <Footer />
      <div id="content"></div>
    </div>
  );
}


export default App;


// src/App.js
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AcademicsPage from './pages/academicsPage';
import JournalEntryPage from './pages/JournalEntryPage';
import Recipes from './components/recipes';
import Houseplants from './components/houseplants';
import Career from './components/career';
import Gallery from './components/gallery';
import Philosophy from './components/philosophy';
import History from './components/history';
import Prehistory from './components/prehistory';
import AncientHistory from './components/ancienthistory';
import MacMiller from './components/mac';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/journal" element={<JournalEntryPage />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/houseplants" element={<Houseplants />} />
          <Route path="/career" element={<Career />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/history" element={<History />} />
          <Route path="/prehistory" element={<Prehistory />} />
          <Route path="/ancienthistory" element={<AncientHistory />} />
          <Route path="/mac" element={<MacMiller />} />
        </Routes>
        <Footer />
        <div id="content"></div>
      </div>
    </Router>
  );
}

export default App;

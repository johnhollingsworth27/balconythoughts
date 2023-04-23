// src/App.js
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AcademicsPage from './pages/AcademicsPage';
import JournalEntryPage from './pages/JournalEntryPage';
import Recipes from './components/recipes';



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
        </Routes>
        <Footer />
        <div id="content"></div>
      </div>
    </Router>
  );
}

export default App;

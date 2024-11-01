import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './MainPage.tsx';

function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/">HomePage</Link> 
      </nav> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;

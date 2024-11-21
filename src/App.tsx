import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage.tsx';
import ProductDetails from './ProductDetails.tsx';
import AlternativeProducts from './AlternativeProducts.tsx';
import NoResultMessage from './NoResultMessage.tsx';
import AddToHistory from './AddToHistory.tsx';

function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/">HomePage</Link> 
      </nav> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />      
        <Route path="/AlternativeProducts" element={<AlternativeProducts />} />      
        <Route path="/NoResultMessage" element={<NoResultMessage />} />   
        <Route path="/AddToHistory" element={<AddToHistory />} />
      </Routes>  
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage.tsx';
import ProductDetails from './ProductDetails.tsx';
import AlternativeProducts from './AlternativeProducts.tsx';
import AddToHistory from './AddToHistory.tsx';
import CheckHistory from './CheckHistory.tsx';

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
        <Route path="/AddToHistory" element={<AddToHistory />} />
        <Route path="/CheckHistory" element={<CheckHistory />} />
      </Routes>  
    </Router>
  );
}

export default App;

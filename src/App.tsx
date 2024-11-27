import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './page/MainPage.tsx';
import ProductDetails from './page/ProductDetails.tsx';
import AlternativeProducts from './page/AlternativeProducts.tsx';
// import AddToHistory from './page/AddToHistory.tsx';
import CheckHistory from './page/CheckHistory.tsx';

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
        {/* <Route path="/AddToHistory" element={<AddToHistory />} /> */}
        <Route path="/CheckHistory" element={<CheckHistory />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
      </Routes>  
    </Router>
  );
}

export default App;

import React from 'react';
import { 
  Routes, 
  Route
} from "react-router-dom";
import Home from './Home'
import WhatToSell from './WhatToSell'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/what-to-sell" element={<WhatToSell />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;

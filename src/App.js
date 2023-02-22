import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import { Home, Quote, CalculatorPage } from './routers';
import { Nav } from './layout';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/calculator" element={<CalculatorPage />} />

        <Route path="/quote" element={<Quote />} />

      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Components from './pages/components';
import Homepage from './pages/homepage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/components" element={<Components/>} />
      </Routes>
    </Router>
  );
};

export default App;
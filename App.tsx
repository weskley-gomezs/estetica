import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Treatments from './pages/Treatments';
import Technology from './pages/Technology';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<About />} />
          <Route path="tratamentos" element={<Treatments />} />
          <Route path="tecnologias" element={<Technology />} />
          <Route path="contato" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Camp from './components/Camp/Camp';
import Guide from './components/Guide/Guide';
import Features from './components/Features/Features';
import Getapp from './components/Getapp/Getapp';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Hero/>
        <Camp/>
        <Guide/>
        <Features/>
        {/* <Getapp/> */}
      <Footer/>
    </div>
  );
}

export default App;

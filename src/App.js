import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Route, BrowserRouter as  Router, Routes } from "react-router-dom";
import { motion } from 'framer-motion';
import Homepage from './Pages/Homepage/Homepage';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';
import Navbar from './components/navbar/navbar';
import Footer from './components/Footer/footer';
import images from '../src/images/galleryImages';




function App() {
  console.log(images);
  return (
    <Router>
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>

     <Footer/>
    </div>
    </Router>
  );
}





export default App;

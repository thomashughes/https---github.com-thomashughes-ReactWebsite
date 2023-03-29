import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import HomePage from './components/Pages/Homepage/homepage'
import Blog from './components/Pages/Blog/Blog';
import Contact from './components/Pages/Contact/Contact';
import Footer from './components/Footer/footer';
import Navbar from './components/navbar/navbar';
import { Link, Route, BrowserRouter as  Router, Routes } from "react-router-dom";



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>

     <Footer/>
    </div>
    </Router>
  );
}





export default App;

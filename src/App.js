import './App.css';
import React from 'react';
import HomePage from './components/Pages/Homepage/homepage'
import Footer from './components/Footer/footer';
import Navbar from './components/navbar/navbar';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
  <div> 
      <Navbar/>
     {HomePage}
     <Footer/>
    </div>//wrapper of entire code end
  );
}



export default App;

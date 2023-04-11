import React from 'react';
import HomePage from './HomePage/HomePage';
import Blog from '../Pages/Blog/Blog';
import Contact from './Contact/Contact';
import Footer from './components/Footer/footer';
import Navbar from "./components/navbar/navbar";
import { Link, Route, BrowserRouter as  Router, Routes } from "react-router-dom";

class App extends React.Component {
  render() {
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
}

export default App;

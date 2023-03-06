import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import IMAGES from './images/index.js';


const infoboxbackground ={
  background1: "reactwebsite/src/images/grid_0.jpeg",
  background2:"reactwebsite/src/images/interiorminds_Daisy_flowers_isolated_on_dark_green_paper_mystic_415f0988-af02-4ea8-b788-f3807c40af44.jpeg",
  background3:"reactwebsite/src/images/interiorminds_Lilly_flowers_isolated_on_dark_green_paper_mystic_e58300ca-2889-4300-8257-654a066331fe.jpeg"
}

const infoboxpic ={
  infopic1: "reactwebsite/src/images/spacephotos/interiorminds_double_exposure_of_an_astronaut_and_a_rocket_wate_30fdf5f1-df28-4800-afa3-62eaf390464c.jpeg",
  infopic2: "reactwebsite/src/images/spacephotos/interiorminds_double_exposure_of_an_astronaut_cdd6ca2a-c1e7-471c-88a9-f61d0fea1504.jpeg",
  infopic3: "reactwebsite/src/images/spacephotos/interiorminds_double_exposure_of_the_moon_and_an_astronaughts_h_b2a4ba43-361c-40bd-8844-be381388fb77.jpeg"
}


const infobox = (
  <div className='infoboxes'>
  <div id="infobox">
      <img src={IMAGES.space1} alt="FLOWERS"/>
     <h1>hello world</h1>
      <p>There are four types of CSS containment: size, layout, style, and paint, which are set on the container. The property is a space-separated list of a subset of the five standard values or one of the two shorthand values. Changes to the contained properties within the container are not propagated outside of the contained element to the rest of the page. The main benefit of containment is that the browser does not have to re-render the DOM or page layout as often, leading to small performance benefits during the rendering of static pages and greater performance benefits in more dynamic applications.</p>
     <br/>
    <br/>
    <ul>
      <li>Increases engagement and retention by transforming UX</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
    </ul>
      <button>hello</button>
  
  </div>
  </div>
  )
 
  const Navbar =(
      <div className="navbar">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    );
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <div>
    {Navbar}
  <div className='flexbox'>
    {infobox}
    {infobox}
    {infobox}
  </div>
  </div>
  
);



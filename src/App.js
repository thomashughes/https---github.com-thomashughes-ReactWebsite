import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar/navbar';
import Infobox from './components/infobox/infobox';
import IMAGES from './images/index.js';
import Iframe from './components/Iframe/Iframe';
import Contact from './components/contactsection/contact';

function App() {
  return (
  <div> 



      {Navbar}
      <div className='IframeCont'>
      <Iframe src="https://tagriffin.co.uk/tours/mytours/portfolio/" title="Portfolio" id="iframeportfolio"/>
      </div>

      <div className='flexbox' id="infoboxcont"> 
      <h2 id="infoboxh2">What I can do for you</h2>
      <div className='infoboxwrapper'>
      <Infobox id="infobox1" title="Front End Development" imgsrc={IMAGES.space1} text="A Bespoke Virtual Tour allows you to convey your message and ethos in a powerful way. It’s a great investment for any business"/>
      <Infobox id="infobox2" title="Virtual Experience" imgsrc={IMAGES.space2} text="With a decade of experience in photographing people, events, and properties, you know you’re in capable hands."/>
      <Infobox id='infobox3' title="Wordpress Developer" imgsrc={IMAGES.space3} text="Conceptual virtual stores, experiences and shops. Web 3 is here and this is an early opportunity to get on board with it"/>
      </div>
      </div>

      <Contact/>



    </div>//wrapper of entire code end
  );
}



export default App;

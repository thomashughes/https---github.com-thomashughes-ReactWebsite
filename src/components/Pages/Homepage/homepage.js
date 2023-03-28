import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Footer from './components/Footer/footer'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../../navbar/navbar';
import Infobox from '../../infobox/infobox';
import IMAGES from '../../../images';
import Iframe from '../../Iframe/Iframe';
// import Contact from './contactsection/contact';
import Contact from '../../contactsection/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Homepage.css';


const homepage = (
    <div> 
        {/* <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/" component={App} />
            <Route path="/ContactPage" component={ContactPage} />
          </Routes>
        </div>
      </BrowserRouter> */}
  
  

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

        <div className='helloSectionWrapper'>
            <div className='leftSideHS flexbox'>
                <h3>Hello From Me</h3>
                <br/>
                <h5>Thomas Hughes, virtual artist</h5>
                <br/>
                <p>After many years of photographing, I saw the potential of fully immersive 360° photography and the positive impact it was having on brands and consumers alike. This boomed during the lockdown as people were forced to virutally visit places across the world as their ability to physically visit them became very limited.</p>
                <p>Now, the full creative power of Virtual Tours have been unleashed and worlds upon worlds can be created and shared across platforms. From changing the way we shop, visit and tell stories, virtual tours are here to stay and we’ll see them accelerate as time goes on.</p>
                <p>Get in touch now and see what I can do for you</p>
            </div>
            <div className='rightSideHS'>
                <img id='photoOfMe' src={IMAGES.photoOfMe} title='A handsome photo of me' alt="A handsome web dev"></img>
            </div>

        </div>
  
        <Contact/>
  
  
  
      </div>//wrapper of entire code end
    );
  
  
  
  
  export default homepage;

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css';
import { motion } from 'framer-motion';
import {faTwitter, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Infobox from '../../components/infobox/infobox';
import IMAGES from '../../images'
import Contact from '../../components/contactsection/contact';
import Hero from '../../components/heroSection/hero';
import ContactButton from '../../components/contactbtn/contactButton';



const Homepage = () => {
  return (
  <div> 
      <div className='herocont'>
        <Hero heroTitle="Tag" heroTitleItalic="art" heroSub="Front End Developer" background={IMAGES.flower1}/>
      </div>
  
        <div className='flexbox' id="infoboxcont"> 
          <h2 id="infoboxh2">What I can do for you</h2>
            <div className='infoboxwrapper'>
              <Infobox id="infobox1" title="Front End Development" imgsrc={IMAGES.space1} text="A Bespoke Virtual Tour allows you to convey your message and ethos in a powerful way. It’s a great investment for any business"/>
              <Infobox id="infobox2" title="Virtual Experience" imgsrc={IMAGES.space2} text="With a decade of experience in photographing people, events, and properties, you know you’re in capable hands."/>
              <Infobox id='infobox3' title="Wordpress Developer" imgsrc={IMAGES.space3} text="Conceptual virtual stores, experiences and shops. Web 3 is here and this is an early opportunity to get on board with it"/>
            </div>
        </div>


      <div className="container helloSection">
        <div className="row container-fluid">
          <div className="col-md-6 mx-auto">
            <div className='helloSectionWrapper'>
              <div className='leftSideHS flexbox'>
                <h3>Hello From Me</h3>
                <br/>
                <h5>Thomas Hughes, virtual artist</h5>
                <br/>
                <p>After many years of photographing, I saw the potential of fully immersive 360° photography and the positive impact it was having on brands and consumers alike. This boomed during the lockdown as people were forced to virutally visit places across the world as their ability to physically visit them became very limited.</p>
                <p>Now, the full creative power of Virtual Tours have been unleashed and worlds upon worlds can be created and shared across platforms. From changing the way we shop, visit and tell stories, virtual tours are here to stay and we’ll see them accelerate as time goes on.</p>
                <p>Get in touch now and see what I can do for you</p>
              <div className='buttonCont mx-auto text-center'>
                <ContactButton/>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-md-6 rightSideHS text-center">
        <img className='img-fluid shadow' id='photoOfMe' src={IMAGES.notme} title='Your next Front end developer' alt="A web dev you want to hire"></img>
         <div className="row social-icons justify-content-center">
        <div className="col-4 col-md-2 text-center">
           <a href='#'><FontAwesomeIcon icon={faTwitter} size="2em" /></a>
          </div>
          <div className="col-4 col-md-2 text-center">
            <a href='#'><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
          </div>
          <div className="col-4 col-md-2 text-center">
            <a href='#'><FontAwesomeIcon icon={faGithub} size="2x" /></a>
          </div>
        </div>
          </div>
          </div>
        <div>
          </div>
      </div>
        <Contact/>
  
  

  </div>//wrapper of entire code end
  );
}
  
  
  
  
  export default Homepage;


 
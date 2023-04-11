import React from 'react';
import './contact.css';
import Hero from '../../components/heroSection/hero';
import IMAGES from '../../images';




const ContactPage = () => {
    return (
      <div> 
        <div className='herocont'>
        <Hero heroTitle="Contact" heroTitleItalic="me" heroSub="say hey" background={IMAGES.flower2}/>

      </div>

<div className="container">
<div className="row">
  <div className="col-md-6">
    <form>
      <div className="form-group">
        <label htmlFor="name">YOUR NAME (REQUIRED)</label>
        <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">YOUR EMAIL (REQUIRED)</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
      </div>
      <div className="form-group">
        <label htmlFor="subject">SUBJECT</label>
        <input type="text" className="form-control" id="subject" placeholder="Enter subject" />
      </div>
      <div className="form-group">
        <label htmlFor="message">YOUR MESSAGE</label>
        <textarea className="form-control" id="message" rows="5"></textarea>
      </div>
      <button type="submit" className="btn contactpagebtn mx-auto d-block">Submit</button>
    </form>
  </div>
  <div className="col-md-6">
    <div className="image-container"></div>
  </div>
</div>
</div>
</div>
    


    );



}

export default ContactPage;
    
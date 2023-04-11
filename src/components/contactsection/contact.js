import 'bootstrap/dist/css/bootstrap.css';
import './contact.css'  //hero section//
import ContactButton from '../contactbtn/contactButton';

    





const Contact = () => {
    return(
        <div className="contactContainer">
            
            <div className="contactleft col-md-6 mx-auto d-flex align-items-center">
  <div className="mx-auto text-left">
    <h2>Why Don't You Get In Touch?</h2>
    <p>
      Get in touch to find out how I can help you realise your virtual dreams
    </p>
  </div>
</div>


            <div className="contactright col-md-6 mx-auto d-flex align-items-center justify-content-center">
              <ContactButton/>
            </div>


        </div>


    )
}


export default Contact
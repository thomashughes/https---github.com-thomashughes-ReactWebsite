import 'bootstrap/dist/css/bootstrap.css';
import './contact.css'  //hero section//


    

function Contact (props){
    return(
        <div className="contactContainer">
            <div className="contactleft">
                <h2>Why Don't You Get In Touch</h2>
                <p>
                Get in touch to find out how I can help you realise your virtual dreams
                </p>
            </div>

            <div className="contactright">
            <button type="button" class="btn btn-success transpbutton">Contact</button>

            </div>

            
        </div>


    )
}


export default Contact
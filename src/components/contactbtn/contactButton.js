import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




const ContactButton = () => {
    return (
<div className='buttonCont mx-auto text-center'>
                <a href="/contact"><button class="btn btn-lg btn-success" type="button">Contact</button></a>
                </div>
    );
}

export default ContactButton;
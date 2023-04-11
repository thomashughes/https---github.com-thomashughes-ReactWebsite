import React from 'react'
import './footer.css' 
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return(
        <div className='mainFooter'>
            <div className='footerContainer'>
                <div className='row'>
                    <div className='ftrbtn'> <FaInstagram/><a href='https://www.instagram.com'> _Tag.art</a></div>
                   <div className='date'> &copy;{new Date().getFullYear()}</div>
                </div>
            </div>


        </div>
    )
}

   


export default Footer
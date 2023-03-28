import './footer.css' 
import React from 'react'
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return(
        <div className='mainFooter'>
            <div className='footerContainer'>
                <div className='row'>
                    <button className='ftrbtn'> <FaInstagram/> _Tag.art</button>
                   <div className='date'> &copy;{new Date().getFullYear()}</div>
                </div>
            </div>


        </div>
    )
}

   


export default Footer
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Hero from '../../components/heroSection/hero';
import IMAGES from '../../images';
import ContactButton from '../../components/contactbtn/contactButton';
import images from '../../images/galleryImages';


const Gallery = () => {
  const [width, setWidth] = useState(0);
  const caurousel = useRef();
  useEffect(() => {

    setWidth(caurousel.current.scrollWidth - caurousel.current.offsetWidth);
  }, []);
    return (
        <div>
          
             <div className='herocont'>
        <Hero heroTitle="my" heroTitleItalic="gallery" heroSub="an online scrapbook" background={IMAGES.flower3}/>
      </div>
      <div className='galleryContainer' ref={caurousel}>

        <h2>A Gallery made with MidJourney</h2>
        
      <div  className='gallerySection'>
        <motion.div  whileTap={{cursor : "grabbing"}}  drag="x" dragConstraints={{right : width, left: -width}} className='caurousel'>
            <motion.div  className='innerCaurousel'>
                {images.map(images =>{
                    return(
                        <motion.div className='item'>
                            <img src={images} alt='gallery'/>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
      </div>
      </div>


        </div>
    );
}
  
  
  
  
  export default Gallery;
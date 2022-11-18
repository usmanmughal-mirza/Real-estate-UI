import React, { useRef, useState } from 'react';
import "./card.css";
import {MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight,MdOutlineBedroomParent,MdOutlineGarage} from "react-icons/md";
import {GiBathtub} from "react-icons/gi";
import {BsTextarea} from "react-icons/bs";


const Card = ({card}) => {
  const [currentIndex,setCurrentIndex]=useState(0);
  

  const preSlide =() =>{
    const isFirstSlide=currentIndex === 0 ;
    if(!isFirstSlide) {
      setCurrentIndex( (preState) => preState - 1 );
    }
  }
  const nextSlide =() =>{
    const isLastSlide=currentIndex === card.img.length -1;
   if(!isLastSlide){
    setCurrentIndex( (preState) =>preState + 1 );
   }
  }

  return (
    <div className='properties-card'> 
        {/* crousel  ------- */}
        <div className="properties-card__imgcrousel">
        
              <div className='properties-card__imgcrousel-singleimg'>
             <img src={card.img[currentIndex]} alt="img"  />

             <div className="properties-card__imgcrousel-singleimg-price">
              <p>{card.price} </p>
             </div>
           
             <div className="properties-card__imgcrousel__arrowcontainer">
            <span onClick={preSlide}><MdOutlineKeyboardArrowLeft className='crousel-arrowleft' /> </span>
            <span onClick={nextSlide}><MdOutlineKeyboardArrowRight className='crousel-arrowright'  /> </span>
          </div>
      
          </div>

        </div>
        {/* --------------- */}
        {/* content -------------- */}
        <div className="properties-card__contentcontainer">
          <h3>{card.heading} </h3>
          <div className="properties-card__content-subcontainer">
            
            <div className="properties-card__content-subcontainer-iconcontainer">
              <p>{card.area} </p>
              <span><BsTextarea /> </span>
            </div>

             <div className="properties-card__content-subcontainer-iconcontainer">
               <p>{card.bathrooms} </p>
              <span><GiBathtub /> </span>
            </div>

             <div className="properties-card__content-subcontainer-iconcontainer">
               <p>{card.bedrooms} </p> 
              <span><MdOutlineBedroomParent /> </span>
            </div>
            
             <div className="properties-card__content-subcontainer-iconcontainer">
               <p>{card.garage} </p> 
              <span><MdOutlineGarage /> </span>
            </div>
           
           
          </div>
        </div>
    </div>
  )
}

export default Card
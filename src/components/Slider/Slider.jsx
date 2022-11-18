import {sliderdata} from "../data/mainslider";
import "./slider.css";
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io";
import { useState } from "react";


const Slider = () => {
    const [firstIndex,setFirstIndex]=useState(0);
    const [secondIndex,setSecondIndex]=useState(1);

    const preSlide =() =>{
    if(firstIndex === 0 ) return setFirstIndex( () => sliderdata.length - 1);
    else {
        return setFirstIndex( (preState) => preState - 1);
    }
   }

   const nextSlide =() =>{
     if(secondIndex === sliderdata.length - 1 ) return setSecondIndex(0);
    else {
        return setSecondIndex( (preState) => preState + 1);
    }
   }
  return (
    <div className="slider">
        {/*slider media(img)  --------------------------------------------------------- */}
     <div className="slider__media">
        {/* first slider  */}
        <div className="slider__firstcontainer">
            <div className="slider__firstcontainer-img">
                <img src={sliderdata[firstIndex].img} alt="crousel-img" />
            </div>
            <div className="slider__firstcontainer-content">
                <h2>{sliderdata[firstIndex].heading} </h2>
                <p>{sliderdata[firstIndex].subheading} </p>
            </div>
        </div>
        {/* ------- */}

        {/* second slider --- */}
        <div className="slider__secondcontainer">
            <div className="slider__secondcontainer-img">
                <img src={sliderdata[secondIndex].img} alt="crousel-img" />
            </div>
            <div className="slider__secondcontainer-content">
                 <h2>{sliderdata[secondIndex].heading} </h2>
                <p>{sliderdata[secondIndex].subheading} </p>
            </div>
        </div>
        {/* ------ */}

     </div>
    {/* ---slider media end------------------------------------------------------------- */}
    {/* slider actions ----------------------------------------------------------------- */}
        
        <div className="slider-actioncontainer">
           <h2>Recent Properties </h2>
           <div className="slider-actioncontainer-btncontainer">
            
             <div className="slider-actioncontainer-btncontainer__firstbtn" onClick={preSlide}>
               
                    <IoIosArrowBack  className="slider-actioncontainer-prebtn" /> 
                   
                <p>Prev</p>
             </div>

             <div className="slider-actioncontainer-btncontainer__secondbtn" onClick={nextSlide}>
                 <p>Next</p>
                 
                    <IoIosArrowForward className="slider-actioncontainer-nextbtn"/>  
                   
             </div>

           </div>
           
       
        </div>
    {/* slider actions ends ----------------------------------------------------------------- */}
    
    </div>
  )
}

export default Slider
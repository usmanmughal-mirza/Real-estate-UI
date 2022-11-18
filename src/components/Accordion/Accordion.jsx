import "./accordion.css";
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";
import { useState } from "react";

const Accordion = ({heading,para}) => {
  const [showAccordion,setShowAccordion]=useState(false);

  return (
    <div className="accordion">

      <div className="accordion__visiblecontainer">
        <h2 onClick={() => setShowAccordion( (preState) => !preState) }> {heading} </h2>
         {showAccordion ?<span onClick={() => setShowAccordion( (preState) => !preState) } > <AiOutlineMinus /> </span> :<span onClick={() => setShowAccordion( (preState) => !preState) }><AiOutlinePlus /></span>  } 
      </div>

      <div className="accordion__hiddencontainer">
       {showAccordion && <p>{para}</p> }  
      </div>
       
    </div>
  )
}

export default Accordion
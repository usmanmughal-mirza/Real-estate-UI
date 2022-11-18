import React from 'react'
import "./navbarlite.css";
import {RiMailLine,RiPhoneLine,RiLoginBoxLine} from "react-icons/ri"

const NavbarLite = () => {
  return (
    <div className='navbarlite'>
      {/* left side ----------------- */}
     <div className="navbarlite__leftside">
      <span>
        <RiPhoneLine className='icon' />
       <p>1-800-1234-567 </p> 
      </span>
      {/* <span style={{borderRight:"1px solid red",display:"inline-block"}}></span> */}
      <span>
        <RiMailLine className='icon' />
        <p>info@demolink.org </p> 
      </span>
     </div>
     {/* ---- */}
     {/* right side ---------------------- */}
     <div className="navbarlite__rightside">
      <span> 
        <RiLoginBoxLine className='icon' />
        <p>Login/Register </p> 
      </span>
     </div>
     {/* --- */}
      </div>
  )
}

export default NavbarLite
import React, { useState } from 'react'
import "./navbar.css";
import {RiCloseLine,RiMenuLine,RiSearchLine,RiArrowDownSLine} from "react-icons/ri";
import Dropdown from '../Dropdown/Dropdown';
import DropdownPages from "../Dropdown/DropdownPages/DropdownPages";
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false);
  const [dropdownProperties,setDropdownPropperties]=useState(false);
  const [dropdownBlog,setDropdownBlog]=useState(false);
  const [dropdownPages,setDropdownPages]=useState(false);



  const handleMenu =() => setShowMenu( (preState) => !preState);

  const closeMenu =() => setShowMenu(false);

  // properties ----
  const onMouseEnterProperties =() =>{
    if(window.innerWidth < 1092 ){
      setDropdownPropperties(false)
    }else{
      setDropdownPropperties(true)
    }
  }

 const onMouseLeaveProperties =() =>{
    if(window.innerWidth < 1092 ){
      setDropdownPropperties(false)
    }else{
      setDropdownPropperties(false)
    }
  }

  // blog --
  const onMouseEnterBlog =() =>{
    if(window.innerWidth < 1092 ){
      setDropdownBlog(false)
    }else{
      setDropdownBlog(true)
    }
  }

 const onMouseLeaveBlog =() =>{
    if(window.innerWidth < 1092 ){
      setDropdownBlog(false)
    }else{
      setDropdownBlog(false)
    }
  }
  // pages ------
  const onMouseEnterPages =() =>{
    if(window.innerWidth < 1092 ){
      setDropdownPages(false)
    }else{
      setDropdownPages(true)
    }
  }

 const onMouseLeavePages =() =>{
    if(window.innerWidth < 1092 ){
      setDropdownPages(false)
    }else{
      setDropdownPages(false)
    }
  }

  return (
    <div className='navbar'>
      {/* ---sidebar  */}
       {showMenu && <Sidebar showMenu={showMenu} /> } 
      {/* ---------- */}
      {/* logo ----------------------------------- */}
      <div className="navbar__logo">
        <img src="https://livedemo00.template-help.com/wt_prod-28463/images/logo-default-142x41.png" alt="nav__logo" />
      </div>

      {/* mobile menu icon --- only show in mobile */}
      <div className="navbar__mobilemenuicon">
        <span onClick={handleMenu}>{showMenu ? <RiCloseLine className='closeicon' /> : <RiMenuLine  className='menuicon'/>} </span>
      </div>

      {/* menu ------------------------------------------ */}
      <ul className={showMenu ? "navbar__menu active":"navbar__menu"}>
       
        <li className="navbar__menu-item">
          <a href="#" onClick={closeMenu}>Home </a>
        </li>

        <li className="navbar__menu-item"
        onMouseEnter={onMouseEnterProperties}
        onMouseLeave={onMouseLeaveProperties}
        >
          <a href="#" onClick={closeMenu}>
            <span>
            <p>Properties</p>
            <RiArrowDownSLine className='icon' />  
            </span>
             </a>
             {dropdownProperties && <Dropdown property /> }
        </li>

        <li className="navbar__menu-item">
          <a href="#" onClick={closeMenu}>About us </a>
        </li>

        <li className="navbar__menu-item"
          onMouseEnter={onMouseEnterBlog}
        onMouseLeave={onMouseLeaveBlog}
        >
          <a href="#" onClick={closeMenu}>
          <span>
            <p>blog</p>
            <RiArrowDownSLine className='icon' />  
          </span>
          </a>
             {dropdownBlog && <Dropdown blog /> }
        </li>

        <li className="navbar__menu-item"
          onMouseEnter={onMouseEnterPages}
        onMouseLeave={onMouseLeavePages}
        >
          <a href="#" onClick={closeMenu}>
          <span>
            <p>Pages</p>
            <RiArrowDownSLine className='icon' />  
            </span>
           </a>
              {dropdownPages && <DropdownPages pages /> }
        </li>

        <li className="navbar__menu-item">
          <a href="#" onClick={closeMenu}>Contact us </a>
        </li>

        <li className="navbar__menu-item">
          <button>Submit Property </button>
        </li>

      </ul>
    </div>
  )
}

export default Navbar
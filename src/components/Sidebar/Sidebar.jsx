import "./sidebar.css";
import {RiArrowDownSLine} from "react-icons/ri";
import {propertieslist,bloglist,pageslist} from "../Dropdown/MenuItems";
import { useState } from "react";

const PropertiesItems =() =>(
    <>
    {propertieslist.map( (item) =>(
         <li key={item.id}>
        <a href="#">{item.title} </a>
    </li>
    ))}
    </>
)
const BlogItems =() =>(
    <>
    {bloglist.map( (item) =>(
         <li key={item.id}>
        <a href="#">{item.title} </a>
    </li>
    ))}
    </>
)
const PagesItems =() =>(
    <>
    {pageslist[0].pages1.map( (item) =>(
         <li key={item.id}>
        <a href="#">{item.title} </a>
    </li>
    ))}
    </>
)

const Sidebar = ({showMenu}) => {
    const [showProperties,setShowProperties]=useState(false);
    const [showBlog,setShowBlog]=useState(false);
    const [showPages,setShowPages]=useState(false);


  return (
    <div className={showMenu ? "sidebar show":"sidebar"}>
        
        <div className="sidebar-btn">
        <button>Submit property </button>
     
         </div>
        {/* menu ---------------------    */}
        <ul className="sidebar__menu">

            <li className="sidebar__menu-item">
                <a href="#">Home </a>
            </li>

            <div className={"sidebar__menu-item-container"} >
                 <li className="sidebar__menu-item" onClick={() => setShowProperties( (preState) => !preState)}>
                <a href="#">
                    <span>
                    <p>Properties </p>
                     <RiArrowDownSLine className='icon' />  
                     </span>
                 </a>

            </li>
             <ul className={showProperties ? "showdropdown":"hidedropdown"}>
                   <PropertiesItems />
                 </ul>
            </div>
           
            
             <li className="sidebar__menu-item">
                <a href="#"> About us</a>
            </li>

                 <div className={"sidebar__menu-item-container"} >
             <li className="sidebar__menu-item" onClick={() => setShowBlog( (preState) => !preState)}>
                <a href="#">
                    <span>
                    <p>blog </p>
                     <RiArrowDownSLine className='icon' />  
                     </span>
                 </a>
            </li>
             <ul className={showBlog ? "showdropdown":"hidedropdown"}>
                   <BlogItems />
                 </ul>
            </div>

              <div className={"sidebar__menu-item-container"} >
             <li className="sidebar__menu-item" onClick={() => setShowPages( (preState) => !preState)}>
                <a href="#">
                    <span>
                    <p>pages </p>
                     <RiArrowDownSLine className='icon' />  
                     </span>
                 </a>
            </li>
             <ul className={showPages ? "showdropdown":"hidedropdown"}>
                   <PagesItems />
                 </ul>
            </div>

              <li className="sidebar__menu-item">
                <a href="#"> contact us</a>
            </li>            

        </ul>
     </div>
  )
}

export default Sidebar
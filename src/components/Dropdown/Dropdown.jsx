
import React, { useState } from 'react';
import "./dropdown.css";
import {propertieslist,bloglist,pageslist} from "./MenuItems";


const Dropdown = ({property,blog,pages}) => {
  const [hideDropdown,setHideDropdown]=useState(false);

  const handleDropdown =() =>setHideDropdown( (preState) =>!preState);

  return (
    <ul className={hideDropdown ? 'navbar__dropdown hide' :'navbar__dropdown'}
    onClick={handleDropdown}
    >
      {/* FOR PROPERTY DROPDOWN ------- */}
      {property && (
         <div className="navbar__dropdown-property">
       {propertieslist.map( (property) =>(
        <>
        <li  key={property.id}>
          <a href="#">{property.title} </a>
        </li>
        </>
       ))}
     </div>
      )}

      {/* FOR BLOG DROPDOWN -------------- */}
      {blog && (
           <div className="navbar__dropdown-blog">
        {bloglist.map( (item) =>(
          
          <>
          <li  key={item.id}>
            <a href="#">{item.title} </a>
          </li>
          </>
        ))}
         </div>
      )}


   </ul>
  )
}

export default Dropdown
import "./dropdownpages.css";
import {pageslist} from "../MenuItems";
import {useState} from "react";

const DropdownPages = ({pages}) => {
 const [hideDropdown,setHideDropdown]=useState(false);

  const handleDropdown =() =>setHideDropdown( (preState) =>!preState);


  return (
    <div className={hideDropdown ? 'dropdown__pages hide' :'dropdown__pages'}
    onClick={handleDropdown}
    >
            {/* FOR PAGES ------ */}
      {pages && (
        <>
        <div className="navbar__dropdown-pages">
          {/* first -- */}
          <div className="navbar__dropdown-pages-item1">
            <h1>ELEMENTS</h1>
            {pageslist[0].pages1.map( (item) =>(
              <>
              <li key={item.id}>
                <a href="#">{item.title} </a>
              </li>
              </>
            ))}
          </div>
          {/* second -- */}
          <div className="navbar__dropdown-pages-item2">
            <h1>PAGES 1</h1>
            {pageslist[1].pages2.map( (item) =>(
              <>
              
              <li key={item.id}>
                <a href="#">{item.title} </a>
              </li>
              </>
            ))}
          </div>
          {/* three ------ */}
          <div className="navbar__dropdown-pages-item3">
                <h1>PAGES 2</h1>
            {pageslist[2].elements.map( (item) =>(
              <>
              <li key={item.id}>
                <span>.</span>
                <a href="#">{item.title} </a>
              </li>
              </>
            ))}
          </div>
        </div>
        
        </>
      )}

      </div>
  )
}

export default DropdownPages
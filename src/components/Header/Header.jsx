import "./header.css";
import {AiOutlinePlus} from "react-icons/ai";
import Slider from "../Slider/Slider";

const Header = () => {
 
  return (
    <div className='header'>
        {/* first div -------------- */}
        <div className="header__firstdiv">
      
            <div className="header__firstdiv-selection">
                <h1>Find Your Property </h1>
                <div className="header__firstdiv-selection__upperdiv">
                
                  <div className="custom-select-1">
                      <select>
                    <option value="0">Choose Location</option>
                    <option value="1">Arakans</option>
                    <option value="2">California</option>
                    <option value="3">Colorado</option>
                    <option value="4">Delaware</option>
                    <option value="Florida">Florida</option>
                     </select>
                  </div>
                 
                      <div className="custom-select-1">
                   <select name="" id="">
                    <option value="0"> Property Type</option>
                    <option value="1">Apartment</option>
                    <option value="2">House</option>
                    <option value="3">Lot</option>
                   </select>
                   </div>

                </div>
                <div className="header__firstdiv-selection__lowerdiv">
                 
                   <div className="custom-select-2">
                      <select>
                    <option value="0">Property Status</option>
                    <option value="1">For Sale</option>
                    <option value="2">For Rent</option>
                     </select>
                  </div>
                   <div className="custom-select-2">
                      <select>
                    <option value="0">Min Baths</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="Florida">5</option>
                     </select>
                  </div>
                   <div className="custom-select-2">
                      <select>
                    <option value="0">Min Beds</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="Florida">5</option>
                     </select>
                  </div>
                </div>
            </div>
            {/* -------------- */}
            {/* range selector ----- */}
            <div className="header__firstdiv-rangeselector">
              <div className="header__firstdiv-rangeselector-first">
                <p>Price Range ($) </p>
                <input type="range" min={50} max={1000} label="i am range"  />
              </div>
               <div className="header__firstdiv-rangeselector-second">
                 <p>Area (Sq Ft) </p>
                <input type="range" min={20} max={2000} label="i am range"  />
              </div>
            </div>
            {/* ----------- */}
            {/* button div ---------------- */}
            <div className="header__firstdiv-actions">
              <div>
                <p> Look for certain features</p>
                <span><AiOutlinePlus />  </span>
              </div>
              <button> Search</button>
            </div>

        </div>
        {/* --- */}
        {/* second --------------------------- */}
        <div className="header__seconddiv">
            <Slider />
        </div>
        {/* --- */}
    </div>
  )
}

export default Header
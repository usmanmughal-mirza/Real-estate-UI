import "./properties.css";
import {data} from "../data/propertiesdata";
import Card from '../PropertiesCard/Card';

const Properties = () => {
  return (
    <div className='properties'>
      <div className="properties__header">
          <h1>Featured Properties </h1>
          <div className="properties__header-btncontainer">
            <button>FOR RENT</button>
            <button>FOR SALE </button>
          </div>
      </div>
    

      <div className='properties-subcontainer'>
      {data.map( (card,ind) =>(
         <Card card={card} key={ind} />
      ))}
      </div>
     
    </div>
  )
}

export default Properties
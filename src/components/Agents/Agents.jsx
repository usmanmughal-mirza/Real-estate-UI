import "./agents.css";
import {data} from "../data/agentsdata";

const Card =({img,name,profession}) => (
    <>
      <div className="agents__card">
            <div className="agents__card-img">
                <img src={img} alt="img" />
            </div>
            <div className="agents__card-content">
                <h2>{name} </h2>
                <p>{profession} </p>
            </div>

        </div>
    </>
)

const Agents = () => {
  return (
    <div className="agents">
        <h1 className="agents__mainheading">Our Agents </h1>
      
        <div className="agents__subcontainer">
              {data.map( (card) =>(
             <Card key={card.id}
             name={card.name} img={card.img} profession={card.profession} />
              ))}
        </div>
       
    </div>
  )
}

export default Agents
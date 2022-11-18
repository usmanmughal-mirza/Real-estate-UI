import {data} from "../data/accordion";
import Accordion from "../Accordion/Accordion";
import "./consultation.css";

const Form =() => (
  <>
  <div className="consultation__formcontainer-form">
    <h1>Get a Free <br /> Consultation </h1>

    <div className="consultation__formcontainer-form__inputcontainer">
     
      <div className="consultation__formcontainer-form__inputcontainer-email">
        <input type="text" name="" id="" placeholder="E-mail" />
      </div>
     
      <div className="consultation__formcontainer-form__inputcontainer-message">
        <input type="text" name="" id="" placeholder="Message" />
      </div>
    </div>

    <button>Send Message </button>
  </div>
  
  </>
)


const Consultation = () => {
  return (
    <div className='consultation'>
      {/* formcontainer ----------------------------------- */}
      <div className="consultation__formcontainer">
       <Form />
      </div>
      {/* accordion --------------------------------------- */}
      <div className="consultation__accordion">
        {data.map( (element) =>(
          <Accordion key={element.id} {...element} />
        ))}
      </div>
    </div>
  )
}

export default Consultation
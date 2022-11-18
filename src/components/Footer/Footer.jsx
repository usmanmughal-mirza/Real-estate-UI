
import "./footer.css";
import {MdPhone,MdLocationPin,MdOutlineMessage} from "react-icons/md";
import {RiTwitterFill,RiFacebookFill,RiGoogleFill,RiPinterestFill} from "react-icons/ri";

const data=[
  {id:Math.random()*10,img:"https://images.pexels.com/photos/5793641/pexels-photo-5793641.jpeg?auto=compress&cs=tinysrgb&w=600",heading:"Retail Store Southwest 186th Street",price:"From $120/month"},
  {id:Math.random()*10,img:"https://images.pexels.com/photos/1926701/pexels-photo-1926701.jpeg?auto=compress&cs=tinysrgb&w=600",heading:"Apartment Building with Subunits",price:"From $120/month"}
]

const Card =({img,heading,price}) =>(
  <>
        <div className="footer__firstdiv-card">
          <div className="footer__firstdiv-card__img">
            <img src={img} alt="img" />
          </div>
          
          <div className="footer__firstdiv-card__content">
            <h3>{heading} </h3>
            <p>{price} </p>
          </div>

        </div>  
  </>
)

const Footer = () => {
  return (
    <div className="footer">
      {/* first div --------- */}
      <div className="footer__firstdiv">
        <h2 className="footer-mainheading">Latest Properties </h2>
        {data.map( (card) =>(
            <Card key={card.id} img={card.img}
            heading={card.heading} price={card.price}  />
        ))}
      
      </div>
      {/* ---- */}
      {/* second div --------- */}
      <div className="footer__seconddiv">
        <h2 className="footer-mainheading">Contact Us </h2>

        <div className="footer__seconddiv-iconcontainer">
          <MdPhone className="footer-secondiv_icon" />
          <p>1-800-700-6200 </p>
        </div>
        <div className="footer__seconddiv-iconcontainer">
          <MdOutlineMessage className="footer-secondiv_icon" />
          <p>info@demolink.org</p>
        </div>
        <div className="footer__seconddiv-iconcontainer">
          <MdLocationPin className="icon footer-secondiv_icon" />
          <p> 3015 Grand Ave, Coconut Grove,Merrick Way, FL 12345</p>
        </div>

      </div>

      {/* third div ---------- */}
      <div className="footer__thirddiv">
         <h2 className="footer-mainheading">Newsletter Signup </h2>
         <p>Enter your e-mail to get the latest news of MyHome</p>

         <div className="footer__thirddiv-inputcontainer">
          <input type="text" placeholder="Your e-mail"  />
          <button>Subscribe </button>
         </div>

         <div className="footer__thirddiv-iconcontainer">
          <RiFacebookFill className="icon" />
          <RiGoogleFill className="icon" />
          <RiPinterestFill className="icon" />
          <RiTwitterFill className="icon" />
         </div>


      </div>

    </div>
  )
}

export default Footer
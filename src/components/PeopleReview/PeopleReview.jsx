import "./peoplereview.css";
import {reviews} from "../data/peoplereviews";

const Card =({name,profession,img,para,date}) =>(
    <>
      <div className="peoplereview__card">

            <div className="peoplereview__card-content">
                <p>{date} </p>
                <p> {para}</p>
            </div>
            
            <div className="peoplereview__card-personalinfo">
                
                <div className="peoplereview__card-personalinfo__img">
                    <img src={img} alt="image" />
                </div>

                <div className="peoplereview__card-personalinfo-bio">
                    <h2>{name} </h2>
                    <p>{profession} </p>
                </div>

            </div>
        </div>
    </>
)

const PeopleReview = () => {
  return (
    <div className='peoplereview'>
        <h1 className="peoplereview__mainheading">What People Say </h1>
        <div className="peoplereview__subcontainer">
              {reviews.map( (review) =>(
             <Card key={review.id} name={review.name} img={review.img} para={review.para} 
             date={review.date} profession={review.profession} />
        ))}
        </div>
      
    </div>
  )
}

export default PeopleReview
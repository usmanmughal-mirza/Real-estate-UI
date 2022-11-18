import "./categories.css";

const Content =() => (
          <div className="categories__content">
            <h3>Studio Apartments </h3>
            <p>8 Properties</p>
          </div>
)


const Categories = () => {
  return (
    <div className="categories">
     <h1 className="categories__mainheading">Categories </h1>
      {/* first row --------------------------------------------
      ------------------------------------------------------ */}
      <div className="categories__firstrow">
      
         <div className="categories__firstrow-imgcontainerone categories-imagecontainer">
             <img
              src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img" />
              
              <Content />
  
         </div>
       
      
         <div className="categories__firstrow-imgcontainertwo categories-imagecontainer">
             <img
             src="https://images.pexels.com/photos/158316/kinzig-fischer-bach-black-forest-water-158316.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="img" 
              />

           <Content />

          </div>
      </div>
    

      {/* second row ----------------------------------------
      ------------------------------------------------------- */}

      <div className="categories__secondrow">
      
        <div className="categories__secondrow-imgcontainerone categories-imagecontainer">
          <img alt="img" 
          src="https://images.pexels.com/photos/666734/pexels-photo-666734.jpeg?auto=compress&cs=tinysrgb&w=600"  />
          
         <Content />
        </div>
       
        <div className="categories__secondrow-imgcontainertwo categories-imagecontainer">

           <img alt="img" 
          src="https://images.pexels.com/photos/10465332/pexels-photo-10465332.jpeg?auto=compress&cs=tinysrgb&w=600"  />

          <Content />

        </div>
       
        <div className="categories__secondrow-imgcontainerthree categories-imagecontainer">
           <img alt="img" 
           src="https://images.pexels.com/photos/731577/pexels-photo-731577.jpeg?auto=compress&cs=tinysrgb&w=600" 
            />
          <Content />

        </div>
        {/* -------- */}

      </div>
      {/* ----------------------------------------------------- */}
      </div>
  )
}

export default Categories
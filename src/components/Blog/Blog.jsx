import "./blog.css";
import {blog} from "../data/blog";

const Card =({img,heading,para,date}) =>(
  <>
   <div className="blog__card">

        <div className="blog__card-imgcontainer">
          <img src={img} alt="img" />
        </div>
        <div className="blog__card-content">
          <h2>{heading} </h2>
          <p>{para} </p>
          <p>{date} </p>
        </div>

      </div>
  </>
)

const Blog = () => {
  return (
    <div className="blog">
      <h1 className="blog__mainheading">Latest Blog Posts</h1>
      
      <div className="blog__subcontainer">
          {blog.map( (blog) =>(
        <Card key={blog.id} img={blog.img}
        heading={blog.heading} para={blog.para}
        date={blog.date} />
        ))}
      </div>
    
    </div>
  )
}

export default Blog
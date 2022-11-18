import React from 'react';
import {Navbar,NavbarLite,Header,Properties,Categories,
PeopleReview,Agents,Footer,Blog,Consultation} from "./components/index";


const App = () => {
  return (
    <div className='app'>
        <NavbarLite />
        <Navbar />
        <Header />
        <Properties />
        {/* <Categories /> */}
        {/* <PeopleReview /> */}
        {/* <Agents  /> */}
        {/* <Consultation /> */}
        {/* <Blog /> */}
        {/* <Footer /> */}
    </div>
  )
}

export default App
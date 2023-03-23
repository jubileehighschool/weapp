import React from "react";
import './Page4.css'

function Page4() {
  return (
    <>
      <div className="wholeContent">
        <div className="sub-content-1">
          
        <h1>  Join the experience </h1>
         <h2>   ITS FREE RIGNT NOW</h2>
          
          <p>
            REGISTER WITH US AND OUR EXECUTIVE WILL BE GETTING IN TOUCH WITH YOU
            SHORTLY!
          </p>
        </div>

        <div className="page4-form">
          <div className="contact-form">
            <span className="heading">Start Your Journey</span>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" required="" />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required="" />
              <label htmlFor="phone-number">Phone Number:</label>
              <input type="number" required="" />
              <label htmlFor="class">Class:</label>
              <input type="text" required="" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page4;

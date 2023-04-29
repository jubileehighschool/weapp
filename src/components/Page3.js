import React from "react";
import ourgoalimage from "./images/ourgoal.jpg";
import './Page3.css'

const Page3 = () => {
  return (
    <>
      <div className="page3whole">
        <div className="page3-image">
          <img src={ourgoalimage} alt='jubilee school'/>
        </div>
        <div className="page3content-1">
          <h2>Our Goal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>

       
      </div>
      <div className="page3content-2">
          <div className="p3sc">
          <h2>126</h2>
          <h4>Lorem ipsum</h4>
          </div>

          <div className="p3sc">
          <h2>31</h2>
          <h4>Lorem ipsum</h4>
          </div>

          <div className="p3sc">
          <h2>22</h2>
          <h4>Lorem ipsum</h4>
          </div>

          <div className="p3sc">
          <h2>100%</h2>
          <h4>Parental Satisfaction</h4>
          </div>
        </div>
    </>
  );
};

export default Page3;

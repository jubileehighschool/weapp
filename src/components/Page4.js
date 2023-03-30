import React, {useRef} from "react";
import './Page4.css'
import emailjs from '@emailjs/browser';

function Page4() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_baw84ra', 'template_12vp5kt', form.current, 'llgoW226VU4AU32SW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

 
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
            <form id="myForm" ref={form} onSubmit={sendEmail} >
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" required="" />
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email"  required="" />
              <label htmlFor="number">Phone Number:</label>
              <input type="number" name="number" required="" />
              <label htmlFor="class">Class:</label>
              <input type="text" name="class" required="" />
              <label htmlFor="enquire">Feel free to ask anything:</label>
              <input type="text" name="enquire" required="" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>


      </div>
    </>
  );
}

export default Page4;

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Join = () => {
   
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fnlyk4i', 'template_fn6hk1h', form.current, 'zACzMzsFyBJCvFwsk')
      e.target.reset()
  };
  return (
    <div className="join" id="join-us">
      <div className="left-j">
         <div>
            <hr />
            <span className="outline-text">READY TO</span>
            <span> LEVEL UP</span>
            </div>
            <div>
            <span>YOUR BODY</span>
            <span className="outline-text"> WITH US?</span>
            </div>
      </div>
      <div className="right-j">
         <form ref={form} onSubmit={sendEmail} className="join-form">
            <input type="text" name="email" placeholder="Enter email"/>
            <div className="btn-div">
            <button type='submit' className="btn join-btn">Join now</button>
            </div>
         </form>
      </div>
    </div>
  )
}


// Try to implement the send email later on
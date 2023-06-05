import { useRef } from "react"

export const Join = () => {
   const form = useRef()
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
         <form ref={form} className="join-form">
            <input type="text" name="email" placeholder="Enter email"/>
            <div className="btn-div">
            <a className="btn join-btn">Join now</a>
            </div>
         </form>
      </div>
    </div>
  )
}


// Try to implement the send email later on
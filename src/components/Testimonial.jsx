import {useState} from "react";
import data from "../data/testimonialsData"

export const Testimonial = () => {
   const [selected, setSelected] = useState(0)
   const dataLength = data.length;

   return (
      <div className="testimonials">
         <div className="left-t">
            <span>Testimonial</span>
            <span className="outline-text">What they</span>
            <span>say about us</span>

            <div className="testimonial-card">
               <span>{
                  data[selected].review
               }</span>
               <div>
                  <span>{
                     data[selected].name
                  }</span>
                  <span>{" "}
                     - {
                     data[selected].status
                  }</span>
               </div>
            </div>
           
         </div>
         <div className="right-t">
            <div></div>
            <div></div>
               <img src={data[selected].image} alt="" className="testimonial-img"/>

               <div className="arrows">
                  <img src="leftArrow.png" alt="" onClick={() => {selected === 0 ? setSelected(dataLength - 1) : setSelected((prev) => prev - 1)}}/>
                  
                  <img src="rightArrow.png" alt="" onClick={() => {selected === dataLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)}}/>

               </div>
            </div>
            
      </div>
   )
}

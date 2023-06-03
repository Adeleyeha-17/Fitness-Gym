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
               <img src={data[selected].image} alt="" />
            </div>
      </div>
   )
}

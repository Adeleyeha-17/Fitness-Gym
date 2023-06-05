import {useState} from "react";
import data from "../data/testimonialsData";
import {motion} from "framer-motion";

export const Testimonial = () => {

   const transition = {type: "spring", duration: 3}

   const [selected, setSelected] = useState(0)
   const dataLength = data.length;

   return (
      <div className="testimonials">
         <div className="left-t">
            <span>Testimonial</span>
            <span className="outline-text">What they</span>
            <span>say about us</span>

            <div className="testimonial-card">
               <motion.span
                key={selected}
                initial={{opacity: 0, x: -100}}
                animate ={{opacity: 1, x: 0}}
                exit ={{opacity: 0, x: 100}}
                transition = {transition} >{
                  data[selected].review
               }</motion.span>
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
            <motion.div
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{...transition, duration: 2}}></motion.div>
            <motion.div
            initial={{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{...transition, duration: 2}}></motion.div>

               <motion.img
               key={selected}
               initial={{opacity: 0, x: 100}}
               animate ={{opacity: 1, x: 0}}
               exit ={{opacity: 0, x: -100}}
               transition = {transition} 
               src={data[selected].image} alt="" className="testimonial-img"/>

               <div className="arrows">
                  <img src="leftArrow.png" alt="" onClick={() => {selected === 0 ? setSelected(dataLength - 1) : setSelected((prev) => prev - 1)}}/>
                  
                  <img src="rightArrow.png" alt="" onClick={() => {selected === dataLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)}}/>
               </div>
            </div>
            
      </div>
   )
}

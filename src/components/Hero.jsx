import {Header} from "./Header";
import { motion } from "framer-motion";

export const Hero = () => {
   const transition = {type: 'spring', duration: 3}
   return (
      <div className="hero">
         <div className="blur blur-hero"></div>
         <div className="left-h">

            {/* Header Component */}

            <Header/> {/* Ads Section */}

            <div className="ads">
               <motion.div          
               initial = {{ left: "178px"}}
               whileInView = {{left: "8px"}}
               transition ={{...transition, type: "tween"}}
></motion.div>
               <span>We care about your fitness</span>
            </div>


            {/* Hero Heading */}

            <div className="hero-text">
               <div>

                  <span>WE HELP PEOPLE</span>
               </div>

               <div>
                  <span>
                     REACH THEIR
                     <span className="outline-text"> FITNESS </span> GOALS</span>
               </div>

               <div>
                  <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa labore odio earum autem, amet sit placeat modi atque eius illum recusandae vero voluptatem rerum asperiores est voluptas commodi, obcaecati quod.</span>
               </div>
            </div>


            {/* Member Figures */}

            <div className="member-figures">
               <div>
                  <span>+140</span>
                  <span>Expert Coaches</span>
               </div>
               <div>
                  <span>+978</span>
                  <span>Members joined</span>
               </div>
               <div>
                  <span>+50</span>
                  <span>Fitness Program</span>
               </div>
            </div>

            {/* Hero Buttons */}

            <div className="buttons">
            <div className="hero-btns">
               <a href="#">Get Started</a>
               <a href="#">Learn More</a>
            </div>
            </div>
            

         </div>


         <div className="right-h">

            {/* Hero Buttons */}

            <div className="hero-btns join-now">
               <a href="#">Join Now</a>
            </div>

            {/* Heart Rate Card */}
            <motion.div
            transition={{...transition, type: "tween"}}
            initial= {{right: "1rem"}}
            whileInView={{right: "4rem"}} className="heart-rate">
               <img src="fi-sr-heart.svg" alt=""/>
               <span>Heart Rate</span>
               <span>168 bpm</span>
            </motion.div>

            {/* Hero Images */}
            <img src="hero-img.png" alt="" className="hero-img"/>
            <motion.img 
               initial = {{ right: "11rem"}}
               whileInView = {{right: "23rem"}}
               transition ={{...transition}} src="hero_image_back.png" alt="" className="hero-img-bg"/> {/* Calories Card */}
            
            <motion.div 
            initial = {{ right: "37rem"}}
            whileInView = {{right: "28rem"}}
            transition ={{...transition, type: "tween"}}
            className="calories">
               <img src="calories.svg" alt=""/>
               <div>
                  <span>Calories Burned</span>
                  <span>220 kcal</span>
               </div>
            </motion.div>
         </div>
      </div>
   )
}

import {Header} from "./Header";

export const Hero = () => {
   return (
      <div className="hero">
         <div className="left-h">

            {/* Header Component */}

            <Header/> {/* Ads Section */}

            <div className="ads">
               <div></div>
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
                     <span className="outline-text">FITNESS
                     </span>
                     GOALS</span>
               </div>

               <div>
                  <span></span>
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

            <div className="hero-btns">
               <a href="#">Get Started</a>
               <a href="#">Learn More</a>
            </div>

         </div>


         <div className="right-h">

            {/* Hero Buttons */}

            <div className="hero-btns">
               <a href="#">Join Now</a>
            </div>

            {/* Heart Rate Card */}
            <div className="heart-rate">
               <img src="fi-sr-heart.svg" alt=""/>
               <span>Heart Rate</span>
               <span>168 bpm</span>
            </div>

            {/* Hero Images */}
            <img src="hero-img.png" alt="" className="hero-img"/>
            <img src="hero_image_back.png" alt="" className="hero-img-bg"/> {/* Calories Card */}
            <div className="calories">
               <img src="calories.svg" alt=""/>
               <div>
                  <span>Calories Burned</span>
                  <span>220 kcal</span>
               </div>
            </div>
         </div>
      </div>
   )
}

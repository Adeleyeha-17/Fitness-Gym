/* eslint-disable react/jsx-key */
import data from "../data/plansData"

export const Plans = () => {
   const plansCard = data.map(items => <div className="plan-card">
      <img src={
            items.icon
         }
         alt=""
         className="plan-icons"/>
      <span>{
         items.name
      }</span>
      <span>${
         items.price
      }</span>

      <div className="features">
         {
         items.features.map((feature, index) => (
            <div key={index}>
               <img src="whiteTick.png" alt=""/>
               <span>{feature}</span>
            </div>
         ))
      } </div>

      <span>See more benefits</span>

      <div className="hero-btns plan-btn">
         <a href="#">Join Now</a>
      </div>
   </div>)

   return (
      <div className="plans-container" id="plan">
         <div className="blur blur-plans-1"></div>
         <div className="program-header">
            <span>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span>WITH US</span>
         </div>

         {/* Plans Cards */}
         <div className="plans-card">
            {plansCard}
         </div>
         <div className="blur blur-plans-2"></div>
      </div>
   )
}

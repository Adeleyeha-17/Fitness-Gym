/* eslint-disable react/prop-types */
export const PlansCard = (props) => {
   return (
     <div className="plan-card">
       <img src={props.item.icon} alt="" className="plan-icons" />
       <span>{props.item.name}</span>
       <span>${props.item.price}</span>
 
       <div className="features">
         {props.item.features.map((feature, index) => (
           <div key={index}>
             <img src="whiteTick.png" alt="" />
             <span>{feature}</span>
           </div>
         ))}
       </div>
 
       <span>See more benefits</span>
 
       <div className="hero-btns plan-btn">
         <a href="#">Join Now</a>
       </div>
     </div>
   );
 };
 
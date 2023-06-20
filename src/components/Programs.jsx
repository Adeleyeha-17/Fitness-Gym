/* eslint-disable react/jsx-key */
import data from "../data/programsData"


export const Programs = () => {

   const catCards = data.map(items => <div className="categories">
      <img src={
            items.image
         }
         alt=""
         className="img-icons"/>

      <span>{
         items.heading
      }</span>
      <span>{
         items.details
      }</span>

      <a>Join Now
         <span><img src={
                  items.arrowImg
               }
               alt=""/></span>
      </a>
   </div>)

   return (
      <div className="programs" id="programs">
         <div className="program-header">
            <span>Explore our</span>
            <span className="outline-text">Programs</span>
            <span>Plan</span>
         </div>
         <div className="cards">
            {catCards} </div>
      </div>

   )
}

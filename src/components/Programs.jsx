import {Categories} from "./Categories"
import data from "../data/programsData"


export const Programs = () => {

   const catCards = data.map(items => <Categories key={
         items.id
      }
      item={items}/>)

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

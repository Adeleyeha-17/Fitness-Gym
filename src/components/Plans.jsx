/* eslint-disable react/jsx-key */
import data from "../data/plansData"
import { PlansCard } from "./PlansCard"

export const Plans = () => {
      const plansCard = data.map(items => <PlansCard
      item={items}/>
      )

  return (
    <div className="plans-container">
     <div className="program-header">
      <span>READY TO START</span><span>YOUR JOURNEY</span><span>WITH US</span>
     </div>

     {/* Plans Cards */}
     <div className="plans-card">
      {plansCard}
     </div>
      </div>
  )
}

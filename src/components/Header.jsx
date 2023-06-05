import { useState } from "react";


export const Header = () => {
   const mobileScreen = window.innerWidth <= "768" ? true : false;
   const [openMenu, setOpenMenu] = useState(false)
   return (
      <div className="header">
         <img src="logo.svg" alt="" className="logo"/>

{(mobileScreen === true && openMenu === false) ? (
   <div className="bar-div" onClick={() => setOpenMenu(true)}>
      <img src="bars.png" alt="" className="bars"/>
   </div>
) :  <ul className="header-menu">
<li onClick={() => setOpenMenu(false)}>Home</li>
<li onClick={() => setOpenMenu(false)}>Programs</li>
<li onClick={() => setOpenMenu(false)}>Plans</li>
<li onClick={() => setOpenMenu(false)}>Testimonial</li>
<li onClick={() => setOpenMenu(false)}>Why us</li>
</ul>}
      </div>
   )
}

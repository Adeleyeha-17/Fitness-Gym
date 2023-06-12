import { useState } from "react";
import {Link} from "react-scroll"


export const Header = () => {
   const mobileScreen = window.innerWidth <= 768 ? true : false;
   const [openMenu, setOpenMenu] = useState(false)
   return (
      <div className="header">
         <img src="logo.svg" alt="" className="logo"/>



<div>
{(mobileScreen === true && openMenu === false) ? (
   <div className="bar-div" onClick={() => setOpenMenu(true)}>
      <img src="bars.png" alt="" className="bars"/>
   </div>
) :  <ul className="header-menu">
<li>
   <Link onClick={() => setOpenMenu(false)}
   to = "header"
   spy={true}
   smooth ={true}>Home</Link>
   </li>
<li>
<Link onClick={() => setOpenMenu(false)}
   to = "programs"
   spy={true}
   smooth ={true}>Program</Link>
</li>
<li>
<Link onClick={() => setOpenMenu(false)}
   to = "reasons"
   spy={true}
   smooth ={true}>Why us</Link>
</li>
<li>
<Link onClick={() => setOpenMenu(false)}
   to = "plan"
   spy={true}
   smooth ={true}>Plan</Link>
</li>
<li>
<Link onClick={() => setOpenMenu(false)}
   to = "testimonial"
   spy={true}
   smooth ={true}>Testimonial</Link>
</li>
</ul>}
</div>
      </div>
   )
}

/* eslint-disable react/prop-types */
export const Categories = (props) => {
   return (
      <div className="categories">
         <img src={
               props.item.image
            }
            alt=""
            className="img-icons"/>

         <span>{
            props.item.heading
         }</span>
         <span>{
            props.item.details
         }</span>

         <a>Join Now
            <span><img src={
                     props.item.arrowImg
                  }
                  alt=""/></span>
         </a>
      </div>
   )
}

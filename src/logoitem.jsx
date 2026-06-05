import React from 'react'
import "./index.css"
const Logoitem = (props) => {
  return (
    <div className='logoitem'>
        <img  style={{ "height": "20px" }}src={props.img} alt="" />
        <a  style= {{"textDecoration":"none" ,"color":"white"}} href={props.link}>{props.a}</a>

      


        
      
    </div>
  )
}

export default Logoitem

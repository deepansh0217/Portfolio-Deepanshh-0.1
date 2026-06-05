import React from 'react'
import "./index.css"

const Contactcard = (props) => {
  return (
    <div className='Contactcard'>
        <img style={{ "height": "25px" }}src={props.img} alt="" />
        <p>{props.p}</p>

      
    </div>
  )
}

export default Contactcard

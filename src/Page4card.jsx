import React from 'react'
import "./index.css"
import { motion } from "framer-motion"

const Page4card = (props) => {
  return (
    <motion.div 
       initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ "opacity": "1", scaleX: 1 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.8 }}
    
    
    className='Page4card'>

        <h2>{props.h2}</h2>

        <img  style ={{"height":"150px"}}src={props.img} alt="" />
      <p style={{"lineHeight":"1.3"}}>{props.p}</p>

      <a  style={{"color":"#c2c727" ,"textDecoration":"none" }} href={props.link}> <b>Live Demo </b> </a>
    </motion.div>
  )
}

export default Page4card

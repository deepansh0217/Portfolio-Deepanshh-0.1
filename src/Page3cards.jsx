import React from 'react'
import "./index.css"
import { easeInOut, motion, spring } from "framer-motion"
const Page3cards = (props) => {
  return (
    <motion.div 
    initial={{opacity:0 ,scale: 0} }
    whileInView={{opacity:0.9 ,scale:1}}
    transition={{duration :1, type:spring,stiffness :200 ,damping:10 ,ease:easeInOut}}


    viewport={{amount:0.5}}

     className='Page3cards'>

      <img style={{"height":"60px" }}  src={props.img} alt="" />
      <h2 style={{"fontSize":"14px" ,"marginTop":"10px"}}>{props.title}</h2>

      <p style={{"marginTop":"20px", "fontSize":"13px" ,"lineHeight":"1.5" ,"opacity":"0.8"}}>{props.dis}</p>
    </motion.div>
  )
}

export default Page3cards

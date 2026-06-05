import React from 'react'
import "./index.css"
// import photo from "./src/assets/image.png.jpeg"
import { motion } from "framer-motion"
const Page2 = () => {
  return (
    <div className='page2' id='about'>

      
      <h3 style={{"opacity":"0.8"}}>MORE THAN A <br/>PROFESSION,</h3>
      < motion.h1 initial={{ opacity: 0, y: 50 }}   whileInView={{"opacity":"1" , y:0}} viewport={{amount:0.9}}  transition={{ duration: 0.8,  }} style={{"color":" #264d36"}}>IT'S WHO</motion.h1>
      
      <motion.h1 initial={{ opacity: 0, y: 50 }}   whileInView={{"opacity":"1" , y:0}} viewport={{amount:0.8}}  transition={{ duration: 0.8,  }} style={{"color":" #264d36"}} >I AM.</motion.h1>


      < motion.p  initial={{ opacity: 0 ,y:50}}   whileInView={{"opacity":"0.8" ,y:0}} viewport={{amount:0.9}}  transition={{ duration: 1 }} style={{"marginTop":"20px" ,"lineHeight":"1.7" ,opacity:"0.8"}}>Hello, I'm Deepansh Patel-A Front-End Web Designer &  UX Developer. <br /> I craft modern, responsive, and visually  engaging digital experiences that  <br />combine clean design  with powerful functionallty.</motion.p>
      <motion.p    initial={{ opacity: 0 ,y:50}}   whileInView={{"opacity":"0.8" ,y:0 }} viewport={{amount:0.9}}  transition={{ duration: 1 }}style={{"marginTop":"15px" ,"lineHeight":"1.7" ,opacity:"0.8"}}>With a strong focus on user-centered design performance, and  seamless <br/>  interactions, I buld wetsites that not only look exceptional but  also  <br/> deliver intuitive navigation and  meaningful results.</motion.p>


<div className="rr">
  <img  style={{"height": "100%" ,"width": "100%" ,"objectFit":"cover" }} src="\src\assets\imge.jpeg" />
</div>


    
    </div>
  )
}

export default Page2

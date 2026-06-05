import React from 'react'
import "./index.css"
import { motion } from "framer-motion"
const Page1left = () => {
    return (
        <div className='Page1left'>
            <motion.h1 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 0.8, x: 0 }} transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200, ease: "easeOut" }} id='hii'>HII</motion.h1>
            <br />   
            <motion.h1 initial={{ opacity: 0, x: -200 }} animate={{ opacity: 0.8, x: 0 }} transition={{ duration: 1, delay: 1, type: "spring", stiffness: 200, ease: "easeOut" }} id='i-am'>I AM</motion.h1>
            <br />    
            <motion.h1 initial={{ opacity: 0, x: -400 }} animate={{ opacity: 0.8, x: 0 }} transition={{ duration: 1., delay: 1.5, type: "spring", stiffness: 200, ease: "easeOut" }} id="deepansh" >DEEPANSH</motion.h1>

            <h2>Al Engineer, Full Stack Developer  <br /> UI/UX Designer</h2>
            <p style={{ "opacity": "0.7", "color": "white", "marginTop": "15px" }}   >Building intelligent products, digital experiences <br /> and scalable solutions with clean code  <br />and modern design</p>

            <div style={{ "marginTop": "40px", "gap": "20px", "display": "flex" }}>


                <button style={{ "backgroundColor": "#2d5682", "color": "white", "border": "none", "padding": "10px 20px", "borderRadius": "5px", "cursor": "pointer" }} className='btn'>Download CV</button>
                <button style={{ "backgroundColor": "#337643", "color": "white", "border": "none", "padding": "10px 20px", "borderRadius": "5px", "cursor": "pointer" }}    >Contact Me</button>

            </div>


        </div>
    )
}

export default Page1left

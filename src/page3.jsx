import React from 'react'
import "./index.css"
import Page3cards from './Page3cards'
import { motion } from "framer-motion"
const Page3 = () => {
  return (
    <div className='Page3' id='service'>
      <motion.h1 initial={{ opacity: 0, y: 100 }}
        whileInView={{ "opacity": "1", y: 0 }}
        viewport={{ amount: 0.9 }}
        transition={{ duration: 1 }}

        style={{ "color": "white", "opacity": "0.8" }}>WHAT</motion.h1>

      <motion.h1> <span style={{ color: "#264d36" }}>I</span> <motion.span style={{ color: "#264d36", display: "inline-block" }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ "opacity": "1", y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 1 }}


      >DO</motion.span></motion.h1>

      <p style={{ "marginTop": "20px", "fontSize": "19px", "lineHeight": "1.4", "opacity": "0.7" }}>I specialize in Frontend Development, creating responsive and modern websites <br /> using React and the latest web technologies. I focus on designing  lean,  user  <br />
        -friendly interfaces that provide a seamless user experience  across all  <br />devices. My goal is to build fast-loading, performance-optimized <br /> websites with a strong emphasis on responsiveness, usability,<br />  and modern Ul design for mobile, tablet, and desktop users.</p>

      <div className="Page3rightcontainer">
        <Page3cards dis="Building modern, responsive, and interactive websites with a focus on performance and user experience." 
        title="Frontend Development" 
        img ="https://www.svgrepo.com/show/475822/laptop.svg"/>
        <Page3cards  img="https://www.svgrepo.com/show/354259/react.svg"
        title="React Development" 
        dis="Creating dynamic and scalable web applications using React and modern JavaScript technologies."/>
        <Page3cards  dis="Designing clean, intuitive, and visually appealing interfaces that enhance user engagement."
        title ="UI/UX Design"
         img="https://www.svgrepo.com/show/120689/color-palette.svg"  />

        <Page3cards  title ="Responsive Design"
          dis="Ensuring seamless experiences across mobile, tablet, and desktop devices."  
          img ="https://www.svgrepo.com/show/475875/responsive-device.svg"/>

        <Page3cards  title ="Web Performance" 
        dis ="Optimizing websites for speed, accessibility, and search engine visibility." 
        img ="https://www.svgrepo.com/show/415777/analytics-dashboard-performance.svg" />

        <Page3cards  title ="Custom Web Solutions" 
         dis ="Developing tailored web solutions that meet business goals and user needs."
         img ="https://www.svgrepo.com/show/286180/world-internet.svg" />

      </div>

    </div>
  )
}

export default Page3

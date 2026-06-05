import React from 'react'
import "./index.css"
import { motion } from "framer-motion"
import Page4card from './Page4card'

const Page4 = () => {
  return (
    <div className='Page4' id='projects'>


      <motion.h1
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ "opacity": "1", scaleX: 1 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >PROJECTS</motion.h1>

      <p style={{ "marginTop": "10px", "fontSize": "19px", "lineHeight": "1.4", "opacity": "0.7" }}>
        "I build modern, responsive, and user-friendly web applications using React,  JavaScript, and modern web technologies. My projects focus on clean design, smooth user experience, and high performance. Through each project, I continuously improve my problem-solving skills and development expertise."
      </p>



      <div className="Page4con">
        <Page4card link="https://gram-setu-app.vercel.app" img="https://www.svgrepo.com/show/493066/farmer-man.svg"
          h2="GRAMSETU-APP" p="Gram Setu is a farming service platform that enables farmers to rent tractors and agricultural equipment online. It simplifies the process of finding, booking, and managing farming resources, improving accessibility and efficiency in rural areas." />
         
         <Page4card link="https://farrari-mauve.vercel.app"
         img="https://www.svgrepo.com/show/303325/ferrari-ges-logo.svg"
         h2="FERRARI"
         p="A responsive Ferrari website clone developed using React, HTML, CSS, and JavaScript. It showcases modern UI design, smooth animations, and a clean user experience inspired by the official Ferrari website."/>

        <Page4card img="https://www.svgrepo.com/show/273345/road.svg"
        link="https://deepansh0217.github.io/Road-Seva/"
        h2="ROADSEVA-APP"
        p="Road Save is a road issue reporting platform where users can upload photos of damaged roads, add descriptions, provide location details, and submit complaints. The system helps track and manage road maintenance issues efficiently."
        />

        <Page4card img="https://www.svgrepo.com/show/12226/employment-promotion.svg"
        h2="SOCIAL-AGENCY"
        link="https://react-vite-project-1st.vercel.app/"
        p="Social Agency is a modern digital marketing and social media management platform designed to help businesses grow their online presence. The website showcases services such as social media marketing, content creation, brand strategy."/>


      </div>


    </div>
  )
}

export default Page4

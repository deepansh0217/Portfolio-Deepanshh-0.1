import React from 'react'
import "./index.css"
import Page5card from './Page5card'
import { motion } from "framer-motion"

const Page5 = () => {
    return (
        <div className='Page5' id='skills'>
            <motion.h1  style={{"color":"white"}}>TECH</motion.h1>

            <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ "opacity": "1", y: 0 }}
                viewport={{ amount: 0.4 }}
                transition={{ duration: 0.8 }}
            >STACK</motion.h1>

            <p style={{ "marginTop": "20px", "fontSize": "19px", "lineHeight": "1.4", "opacity": "0.7" }}>
                I have experience working with modern web technologies including  <br /> React, HTML, CSS, JavaScript, Three.js, GSAP, Node.js, and <br /> Express.js. I enjoy building responsive, interactive, and high- <br />performance web applications with clean code and engaging  <br />user experiences. My knowledge of UI/UX design helps me  <br />create visually appealing interfaces that are both functional <br /> and user-friendly.</p>

            <motion.img

             initial={{ opacity: 0, scale: 0 }}
                whileInView={{ "opacity": "1", scale: 1 }}
                viewport={{ amount: 0.4 }}
                transition={{ duration: 0.8 }}
             style={{ "height": "200px", "marginTop": "20px", "opacity": "0.8" }} src="https://www.svgrepo.com/show/223804/skills.svg" alt="" />


            <div className="Page5rr">
                <Page5card  lan ="React"img="https://www.svgrepo.com/show/354259/react.svg" />
                <Page5card  lan ="HTML" img ="https://www.svgrepo.com/show/373669/html.svg"/>
                <Page5card lan ="CSS"  img="https://www.svgrepo.com/show/349330/css3.svg"/>
                <Page5card  lan ="JavaScript" img ="https://www.svgrepo.com/show/452045/js.svg"/>
                <Page5card  lan ="Three.js" img ="https://imgs.search.brave.com/uZwUqnF658NRZk5twACGbY8yWqE3CAVQ1t_a29x0GvA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jYW5h/ZGExLmRpc2NvdXJz/ZS1jZG4uY29tL2Zs/ZXgwMzUvdXBsb2Fk/cy90aHJlZWpzL29w/dGltaXplZC8yWC9l/L2U0Zjg2ZDIyMDBk/MmQzNWMzMGY3YjE0/OTRlOTZiOTU5NWVi/YzI3NTFfMl80OTZ4/NTAwLnBuZw" />
                 <Page5card  lan ="GSAP" img ="https://images.seeklogo.com/logo-png/44/2/greensock-gsap-icon-logo-png_seeklogo-448110.png"/>
                <Page5card  lan ="Node.js" img ="https://www.svgrepo.com/show/376337/node-js.svg"/>
                <Page5card  lan ="Express.js" img="https://imgs.search.brave.com/kGJg762SMLApMqupEqaysEw4dOAmY41K2a-C8Xo4DYg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL2V4cHJl/c3MtanMxNzIwODk1/NDkzLmxvZ293aWsu/Y29tLndlYnA"/>

            </div>


        </div>
    )
}

export default Page5

import React from 'react'
import "./index.css";
import { motion, spring } from "framer-motion"
import Contactcard from './Contactcard';
import Logoitem from './logoitem';


const Page6 = () => {
    return (
        <div className='Page6' id='contact'>

            <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ "opacity": "1", x: 0 }}
                viewport={{ amount: 0.4 }}
                transition={{ duration: 0.8 }}
            ><span style={{ "color": "white" }}>GET</span> IN</motion.h1>

            <motion.h1
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ "opacity": "1", scale: 1 }}
                viewport={{ amount: 0.4 }}
                transition={{ duration: 0.8, type: spring, stiffness: 30, damping: 10 }}
            >TOUCH</motion.h1>

            <p style={{ "marginTop": "20px", "fontSize": "19px", "lineHeight": "1.4", "opacity": "0.7" }}
            >"I'm always open to discussing new projects, freelance opportunities, or collaborations. <br /> Feel free to reach out if you'd like to work together or have any questions."</p>

            <div className="contact">
                <Contactcard img="https://www.svgrepo.com/show/477054/email-download.svg"
                    p="deepanahpatel2006@gmail.com" />

                <Contactcard img="https://www.svgrepo.com/show/469477/phone-out.svg"
                    p="+91 9753289834" />

                <Contactcard img="https://www.svgrepo.com/show/312483/location-indicator-red.svg"
                    p="Bhopal MP" />


            </div>


            <div className="logo">
                <Logoitem img="https://www.svgrepo.com/show/475661/linkedin-color.svg"
                    a=" LinkedIn Profile"
                    link="https://www.linkedin.com/in/deepansh-patel-8211b6343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                />

                <Logoitem img="https://www.svgrepo.com/show/475654/github-color.svg"
                    a="GitHub Profile" link="https://github.com/deepansh0217" />

                
                <Logoitem img="https://www.svgrepo.com/show/475692/whatsapp-color.svg"
                    a="Chat On WhatsApp" link="https://wa.me/+91 9753289834" />

            </div>




            <div className="Page6rr">

                <form action="">

                    <input type="text" placeholder='Name' />

                    <input type="email" placeholder='Email' />
                    <br />
                    <textarea name="" id="" cols={55} rows={8} placeholder=' Write a message'> </textarea>

                    <button
                        style={{
                            "padding": "10px 150px", "color": "white"
                            , "borderRadius": "14px", "border": "none", "marginLeft": "58px", "backgroundColor": " #222228"
                        }}>
                        Send </button>
                </form>


            </div>


            <hr style={{ "position": "relative", "bottom": "550px", "opacity": "0.5" }} />



            <div className="footer">
                <p >
                    © 2026 Deepansh Patel. All Rights Reserved.</p>

                <p
                >
                    Designed & Developed by Deepansh Patel</p>

                    <p>Built with React, GSAP & Motion</p>

                <a href="https://www.linkedin.com/in/deepansh-patel-8211b6343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img style={{ "height": "20px" }} src="https://www.svgrepo.com/show/475661/linkedin-color.svg" alt="" /></a>
                <a href="https://github.com/deepansh0217"><img style={{ "height": "20px" }} src="https://www.svgrepo.com/show/475654/github-color.svg" alt="" /></a>

            </div>





        </div>
    )
}

export default Page6

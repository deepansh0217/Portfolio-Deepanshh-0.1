import React from 'react'
import "./index.css"
import { easeOut, motion } from "framer-motion"
const Page5card = (props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ "opacity": "1", y: 0 }}
            viewport={{ amount: 0.7 }}
            transition={{ duration: 0.8,  ease :easeOut}}
            className='Page5card'>

            <img style={{ "height": "60px", " display": "inline-block" }} src={props.img} alt="" />
            <h2 style={{ " display": "inline-block", "opacity": "0.8" }} >{props.lan}</h2>


        </motion.div>
    )
}

export default Page5card

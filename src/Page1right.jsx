import React from 'react'
import "./index.css"
import { motion } from 'framer-motion'
const Page1right = () => {
  return (
    <div className='Page1right'>
        < motion.img initial={{ opacity: 0 ,x:200 }} animate={{ opacity: 1 ,x:0 }} transition={{ duration: 1, delay: 1, ease: "easeOut", type: "spring" ,stiffness: 50 ,damping: 6}}  
        src="https://www.svgrepo.com/show/157288/working-with-laptop.svg" alt="" />
      
    </div>
  )
}

export default Page1right

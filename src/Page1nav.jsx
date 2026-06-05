import React from 'react'
import "./index.css"
const Page1nav = () => {
  return (
    <div className='Page1nav'>
      <h1><span style={{"color":"red"}}>D</span><span style={{"color":"white"}}>P</span></h1>

        <div className='items'>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href='#service'>Service</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default Page1nav

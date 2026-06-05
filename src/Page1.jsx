import React from 'react'
import "./index.css"
import Page1nav from './Page1nav'
import Page1left from './Page1left'
import Page1right from './Page1right'
const Page1 = () => {
  return (
    <div className='page1' id='home'>
      
        <Page1nav />
        <Page1left />
        <Page1right />

        
      
    </div>
  )
}

export default Page1

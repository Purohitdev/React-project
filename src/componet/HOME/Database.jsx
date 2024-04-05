import React from 'react'
import heroimg from '../../image/database1.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";


function Database() {
  return (
   <div className="database">
    <div className="main-pic">
    <img src={heroimg} alt="" />
  <div className="datadetail">
              <p>watch online</p>
             <h1>we offer the largest anime movies database</h1>
             <button> view detail<span> <IoIosArrowRoundForward /></span> </button>
  </div>

   </div>
   </div>
  )
}

export default Database
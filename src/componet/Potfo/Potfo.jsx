import React from 'react'

import Potmultiple from './Potmultiple'
import Hero from '../HOME/Hero'
import Ourgame from '../Page/Ourgame'
import Database from '../HOME/Database'
import BreadCrumbComp from '../BreadCrumbComp'

function Potfo() {
  return (
   <>
   <BreadCrumbComp title="Portfolio" crumb="Portfolio"/>
  <Potmultiple/>
  {/* <Hero/> */}
  <Ourgame/>
  <Database/>

   </>
  )
}

export default Potfo
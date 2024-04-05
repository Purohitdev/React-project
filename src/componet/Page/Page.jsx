import React from 'react'

import '../../Page.css'
import Explore from './Explore'
import Ourgame from './Ourgame'
import Popular from '../HOME/Popular'
import BreadCrumbComp from '../BreadCrumbComp'



function Page() {
  return (
<>
<BreadCrumbComp title="Our Services" crumb="Our Services"/>             
<Explore/>
<Ourgame/>
<Popular/>
</>

    
  )
}

export default Page
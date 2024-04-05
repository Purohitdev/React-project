import React from 'react'
import BreadCrumbComp from '../BreadCrumbComp'
import Multipleblog from './Multipleblog'
import '../../Blog.css'
import Explore from '../Page/Explore'

function Blog() {
  return (
    <>
    <BreadCrumbComp title="blog" crumb="blog"/>
    <Multipleblog/>
    <Explore/>

    </>
  )
}

export default Blog
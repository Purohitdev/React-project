import React from 'react'
import BreadCrumbComp from'../BreadCrumbComp'
import Mapnadd from './Mapnadd';
import Ticket from './Ticket';
function Contact() {
  return (
   <>
    <BreadCrumbComp title="Contact us" crumb="Contact us"/>   
    <Mapnadd/>
    {/* <Ticket/> */}
    </>        
 
  )
}

export default Contact;
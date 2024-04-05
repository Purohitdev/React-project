import React from 'react'
import { Row,Col ,Container} from 'react-bootstrap'
import { PiDogBold } from "react-icons/pi";
import { RiSwordLine } from "react-icons/ri";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { GiMountaintop } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";







function Ourgame() {

    const gamedata =[
        {
          id:1,
          img:<PiDogBold />          ,
          title:"graphics",
          discr:"sed do eiusm od tempor",

        },
        {
          id:2,
          img:<RiSwordLine />          ,
          title:"gameplay",
          discr:"sed do eiusm od tempor",
        },
        {
          id:3,
          img:<GiPlantsAndAnimals />          ,
          title:"orignality",
          discr:"sed do eiusm od tempor",
        },
        {
          id:4,
          img:<GiMountaintop />          ,
          title:"multiplayer",
          discr:"sed do eiusm od tempor",
        },
      ]



  useEffect(()=>{
    Aos.init({duration:1500})

  },[])
    
  return (
<div className="our-main">
    <div className="our1"  data-aos="fade-out">
        <h5>OUR GAMES</h5>
        <h1>THE MOST UNEXPECTED AND <br /> INTRIGUING PLOT</h1>
    </div>
    <div className="our2">
        <Container>



    <Row className='justify-content-center'>
        {
       gamedata&& 
       gamedata.map((elem,index)=>{
        return(
          
             
        
                    <Col lg={3}>
                    <div className="game">
                        <div className="div-gamepic">
                              <div className='font-size-big'  data-aos="fade-in">
                                {elem.img}
                              </div>
                        
                         </div>
                         

                        <div className='det-our'>
                                <h5>{elem.title}</h5>
                                <p>{elem.discr}</p>
                            

                         </div>
                      </div>
                    </Col>
                    
              
          
        
        
     
        )

      })
    }
    </Row>
    <div className="button-box">
        <button> get started <span> <IoIosArrowRoundForward /></span></button>
    </div>
    </Container>

    </div>

</div>
  )
}

export default Ourgame
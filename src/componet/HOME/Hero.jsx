import heroimage from "../../image/hero.jpg";
import '../../Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Marquee from "react-fast-marquee";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const data =[
  {
    id:1,
    title:"world dai star",
    slash:"/"
  },
  {
    id:2,
    title:"aiyo de mishi",
    slash:"/"
  },
  {
    id:3,
    title:"the marginal service",
    slash:"/"
  },
  {
    id:4,
    title:"world dai star",
    slash:"/"
  },
  {
    id:5,
    title:"world dai star",
    slash:"/"
  },
  {
    id:6,
    title:"world dai star",
    slash:"/"
  },
  {
    id:7,
    title:"world dai star",
    slash:"/"
  },
  {
    id:8,
    title:"world dai star",
    slash:"/"
  }
]


function Hero() {
  useEffect(()=>{
    Aos.init({duration:1500})

  },[])

    



    return (
      <>
        <div className="main">
            <img src={heroimage} alt="" />
            <div className="moving-line flex">
            
   <Marquee speed={90}>
    {
      data && 
      data.map((elem,index)=>{
        return(
        <div className="d-flex align-items-center">
        <div className="d1 p-3">{elem.title}</div>
          <div className="d1 p-2">{elem.slash}</div>
        </div>
        )

      })
    }
    </Marquee>
    

              
            </div>
             </div>
             <div className="detail-hero">
             <Container>

       <div className="hideen" >   <h5 data-aos="fade-up" > JOIN THE COMMUNITY OF ALL-TIMES JAPANSES CLASSICS</h5></div>
          <hr />
       <div className="hideen">
       <h1 data-aos="fade-up">video portal</h1>
       </div>
           <hr />
     <div className="hideen">
     <h6  data-aos="fade-right"> ANIME CULTURE </h6>
     </div>
                </Container>

             </div>
      </>)
}
export default Hero
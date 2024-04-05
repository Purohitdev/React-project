import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../Contact.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiSmartphoneLine } from "react-icons/ri";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { CiLocationArrow1 } from "react-icons/ci";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";






function Mapnadd() {

    useEffect(()=>{
        Aos.init({duration:1500})
    
      },[])
    return (
        <div className="black">
            <Container>
                <Row>
                    <Col lg={6}  data-aos="fade-out">
                        <div className="boerder extra">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.229588099677!2d72.84733388069465!3d19.228823400785217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d42c95bdf9%3A0x5a3374a957943f4b!2sTryCatch%20Classes%20%7C%20Full%20Stack%20Web%20%7C%20Flutter%20Android%20IOS%20%7C%20Digital%20Marketing%20%7C%20Software%20Testing%20%7C%20Data%20Science%20Training%20Course!5e0!3m2!1sen!2sin!4v1712247324735!5m2!1sen!2sin"></iframe>

                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="boerder">
                            <Row>
                                <Col lg={6}>
                                    <div className="border-inner"  data-aos="fade-in">
                                        <div className="icon-box-cont">
                                            <div className="circle-box">
                                                <HiOutlineLocationMarker />


                                            </div>

                                        </div>
                                        <div className="icon-box-det">
                                            <h1>Address</h1>
                                            <p>1213, 12th Floor, Gold Crest Business Center, Borivali West, Mumbai, Maharashtra 400092</p>

                                        </div>

                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="border-inner" data-aos="fade-in">
                                        <div className="icon-box-cont">
                                            <div className="circle-box">
                                                <RiSmartphoneLine />


                                            </div>

                                        </div>
                                        <div className="icon-box-det">
                                            <h1>Contact Details</h1>
                                            <p>devpurohit1.com</p>
                                          <hr />
                                            <p>+91 96 533 64 287</p>
                                        </div>


                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col data-aos="fade-up">
                                    <div className="border-inner">
                                        <h1>send message</h1>
                                        <div className="message">
                                            <Form.Floating className="mb-3">
                                                <Form.Control
                                                    id="floatingInputCustom"
                                                    type="Name"
                                                    placeholder="Name"
                                                />
                                                <label htmlFor="floatingInputCustom">Name</label>
                                            </Form.Floating>
                                            <Form.Floating>
                                                <Form.Control
                                                    id="floatingPasswordCustom"
                                                    type="email"
                                                    placeholder="email"
                                                />
                                                <label htmlFor="floatingPasswordCustom">email</label>
                                            </Form.Floating>
                                           
                                            <FloatingLabel controlId="floatingTextarea2" label="Comments" className='mgt'>
                                              
                                                <Form.Control
                                                    as="textarea"
                                                    placeholder="Leave a message here"
                                                    style={{ height: '100px' }}
                                                />
                                            </FloatingLabel>
                                        </div>
                                        <button> submit <span> <CiLocationArrow1 /></span></button>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </Col>
                </Row>

            </Container>
     
        </div>
    )
}

export default Mapnadd
import React,  { useState } from "react";
import {Col, Container, Row} from "react-bootstrap";




export const ContactForm = () => {
    // const formInitialDetails = {
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     phone: "",
    //     message: ""
    // };

    // const [formDetails, setFormDetails] = useState(formInitialDetails);
    // const [buttonText, setButtonText] = useState("Send");
    // const [status, setStatus] = useState({});
    
    // const onFormUpdate = (category, value) => {
    //     setFormDetails({
    //         ...formDetails,
    //         [category]: value
    //     })
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setButtonText('Sending...');
    //     let response = await fetch("/api/contact", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type" : "application/json;charset=utf-8",
    //         },
    //         body:JSON.stringify(formDetails),
    //     });
        
    //     let result = await response.json();
    //     setButtonText("Send");
    //     setFormDetails(formInitialDetails);
    //     if (result.code === 200) {
    //         setStatus({success: true, message: 'Message sent successfully'});
    //     } else {
    //         setStatus({success: false, message:"Something went wrong, please try again later"})
    //     }
    // };

    return (
        <>

        <section className="contact" id="contact">
            
            <Container>
                        <h2>Get In Touch</h2>
                        <form  name="contact" data-netlify="true">
                            <input
                            type="hidden"
                            name="form-name"
                            value="contact"
                             />
                        {/* <form> */}
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input
                                    type="text" 
                                    id="first-name"
                                    name="first-name"
                                    // value={formDetails.firstName} 
                                    placeholder="First Name" 
                                    // onChange={(e) => onFormUpdate("firstName", e.target.value)} 
                                    />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input 
                                    type="text" 
                                    id="last-name"
                                    name="last-name"
                                    // value={formDetails.lastName} 
                                    placeholder="Last Name" 
                                    // onChange={(e) => onFormUpdate("lastName", e.target.value)} 
                                    />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    // value={formDetails.email} 
                                    placeholder="Email" 
                                    // onChange={(e) => onFormUpdate("email", e.target.value)} 
                                    />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input 
                                    type="tel" 
                                    id="phone"
                                    name="phone"
                                    // value={formDetails.phone} 
                                    placeholder="Phone Number" 
                                    // onChange={(e) => onFormUpdate("phone", e.target.value)} 
                                    />
                                </Col>
                                <Col>
                                    <textarea 
                                    rows={6} 
                                    name="message"
                                    id="message"
                                    // value={formDetails.message} 
                                    placeholder="Message" 
                                    // onChange={(e) => onFormUpdate("message", e.target.value)} 
                                    />
                                <button type="submit"><span>Send</span></button>
                                </Col>

                                
                            </Row>
                        </form>
                    
               
            </Container>
        </section>
        </>
    )
};
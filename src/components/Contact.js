
import React,  { useState, useEffect } from "react";
import {Col, Container, Row} from "react-bootstrap";
import contactImg from "../assets/img/projects/kc.jpg";
import { ContactNavBar } from './ContactNavBar';
import { Footer } from "./Footer";
import { ContactForm } from "./ContactForm";


export const Contact = () => {
   

    // useEffect(() => {
    //     fetch("/api")
    //     .then((res) => res.json())
    //     .then((data) => { console.log(data)})
    //   }, [])
    
    return (
        <div>

        <ContactForm />
        <Footer />
        </div>
    )
};
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import logo from '../assets/img/logo-tranparent (1).png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/upwork.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const ContactNavBar = () => {
   
    return (
        <Navbar expand="md" >
          <Container>
            <Navbar.Brand href="home">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span> 
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link> */}
                <Link to='home' >Home</Link>
                {/* <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link> */}
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={navIcon1} alt=""/></a>
                    <a href="#"><img className="upwork" src={navIcon2} alt=""/></a>
                    <a href="#"><img src={navIcon3} alt=""/></a>
                    
                </div>

                <Link to='contact' ><button className="vvd"><span>Let’s Connect</span></button></Link>
                  </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
};

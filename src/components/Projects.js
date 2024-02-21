import {Col, Container, Row, Nav, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import projImg1 from '../assets/img/projects/kc1.jpg';
import projImg2 from '../assets/img/projects/feather-stone-books.jpg';
import projImg3 from '../assets/img/projects/film-finder.jpg';
import projImg4 from '../assets/img/projects/kacielynnart-email-ad3.png';
import projImg5 from '../assets/img/projects/rose-floral-co.jpg';
import projImg6 from '../assets/img/projects/hannah-payne-portfolio-1.0.jpg';
import projImg7 from '../assets/img/projects/meditation.jpg';
import projImg8 from '../assets/img/projects/pixel-art-genorator.jpg';
import projImg9 from '../assets/img/projects/screencapture-jamminplaylistcreator-netlify-app-2024-01-31-19_33_23.jpg'
import resume from '../assets/pdf/hannah-payne-resume.pdf';


export const Projects = () => {

    const frontEndProjects = [
        {
            title: "Artist Website Portfolio" ,
            description: "Portfolio created for a client to present their work as an artist. A responsive website that features a gallery of the art, a contact page, links to social media, and multiple custom domain names. The webpage was created using HTML, CSS and some Vanilla JavaScript. ",
            imgUrl: projImg1,
            url: "https://www.kacielynnart.com/" 
        },
        {
            title: "Rose Floral Co" ,
            description: "The goal for this project was to create a WordPress website for the client that would showcase her work and make contacting her seamless and visually catching. Using WordPress plug-ins and templates to create a webpage that is easy to navigate.",
            imgUrl: projImg5,
            url: ''
        },
        {
            title: "Jammin" ,
            description: "Spotify application where a user can log into their account and make playlists by using Spotify's API to search songs by name and create a playlist all in one place.",
            imgUrl: projImg9,
            url: 'https://jamminplaylistcreator.netlify.app/'
        },
        {
            title: "Hannah Payne Portfolio 1.0" ,
            description: "The first version of my Front End Developer Portfolio using HTML and CSS",
            imgUrl: projImg6,
            url: 'https://hannah-payne-portfolio-1.netlify.app/'
        },
        {
            title: "Email Advertisement" ,
            description: "A responsive email advertisement for local artist ",
            imgUrl: projImg4,
            url: 'https://kacielynn-email-advertisement.netlify.app/'
        },
        {
            title: "Feather Stone Books" ,
            description: "Simple website to exhibit a potential local book store.",
            imgUrl: projImg2,
            url: 'https://hannahrpayne.github.io/Featherstone-Books/'
        }
    ];

    const otherProjects = [
        {
            title: "Film Finder" ,
            description: "Application made using HTMl, CSS and Javascript that takes an API to show you a movie recommendation based off the genre you choose.",
            imgUrl: projImg3,
            url: "https://filmfinderapplication.netlify.app/" 
        },
        {
            title: "Meditation App" ,
            description: "An application with the goal to help you relax by playing your sound of choice of relaxing waves or calming rain. It features a circular timer status to keep track of your remaining times. Created with CSS, HTML and vanilla JavaScript",
            imgUrl: projImg7,
            url: 'https://sunandrainmeditationapp.netlify.app/'
        },
        {
            title: "Pixel Art Creator" ,
            description: "Create pixel art. Choose the color and size of grid. Created with CSS, HTML and vanilla JavaScript",
            imgUrl: projImg8,
            url: 'https://main--pixelart-creator.netlify.app/'
        }
    ]


    return (
        <section className="project" id="projects">
            <Container>
                
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h2>Projects</h2>
                        </div>}
        </TrackVisibility>            
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Web Developement</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Other Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Resume</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            frontEndProjects.map((frontEndProjects, index) => {
                                                return (
                                                    <ProjectCard 
                                                    key={index} 
                                                    {...frontEndProjects}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <Row>
                                        {
                                            otherProjects.map((otherProjects, index) => {
                                                return (
                                                    <ProjectCard 
                                                    key={index}
                                                    {...otherProjects}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'><object data={resume} height="1000px" width="100%"></object></Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    );
};
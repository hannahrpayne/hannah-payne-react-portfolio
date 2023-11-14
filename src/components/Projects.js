import {Col, Container, Row, Nav, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from '../assets/img/inline_image_preview.jpg';
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Projects = () => {

    const projects = [
        {
            title: "Artist Website Portfolio" ,
            description: "Portfolio that I created and designed for a client who is an artist.",
            imgUrl: projImg1,
        },
        {
            title: "Artist Website Portfolio" ,
            description: "Portfolio that I created and designed for a client who is an artist.",
            imgUrl: projImg1,
        },
        {
            title: "Artist Website Portfolio" ,
            description: "Portfolio that I created and designed for a client who is an artist.",
            imgUrl: projImg1,
        },
        {
            title: "Artist Website Portfolio" ,
            description: "Portfolio that I created and designed for a client who is an artist.",
            imgUrl: projImg1,
        },
        {
            title: "Artist Website Portfolio" ,
            description: "Portfolio that I created and designed for a client who is an artist.",
            imgUrl: projImg1,
        },
        {
            title: "Artist Website Portfolio" ,
            description: "Portfolio that I created and designed for a client who is an artist.",
            imgUrl: projImg1,
        }
    ]


    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  </p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>Lorem ipsum</Tab.Pane>
                                <Tab.Pane eventKey='third'>Lorem Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    );
};
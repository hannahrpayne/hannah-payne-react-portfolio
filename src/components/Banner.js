import { useState, useEffect } from "react";
import React from "react"
import {Col, Container, Row} from "react-bootstrap";
import { ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from '../assets/img/Untitled_Artwork.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {Contact} from '../components/Contact';
import { Link } from 'react-router-dom';


export const Banner = () => {

    const [loopNum, setLoopNum]= useState(0);
    const [isDeleting, setIsDeleting]= useState(false);
    const toRotate = ["Web Developer", "Web Designer", "Wordpress Developer"];
    const [text, setText]= useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

    return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2 )
        }

        if (!isDeleting  && updatedText === fullText ) {
            setIsDeleting(true);
            setDelta(period);
            
        } else if (isDeleting  && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }



    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} > 
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Hannah Payne's Portfolio</span>
                                <h1>{`Hello I'm a `}<br></br><span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
                                <p>HP is a Utah-based front-end developer with over 2 years of experience, dedicated to creating visually appealing and user-friendly websites.</p>
                                <Link to='contact' target="_blank" ><button to={Contact} >Let's connect<ArrowRightCircle size={25} /></button></Link>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                       <img className="header-image" src={headerImg} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

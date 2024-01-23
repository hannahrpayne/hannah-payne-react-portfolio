import {Col, Container, Row} from "react-bootstrap";
import logo from '../assets/img/logo-tranparent (1).png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/upwork.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <Row className= "align-item-center">
                <Col sm={6} >
                    <img className="footer-logo" src={logo} alt="Logo"/>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href=""><img src={navIcon1}></img></a>
                        <a className="upwork" href=""><img  src={navIcon2}></img></a>
                        <a href=""><img src={navIcon3}></img></a>
                    </div>
                    <p>CopyRight 2023. All Right Reserved Hannah Payne</p>
                </Col>
                </Row>
            </Container>
        </footer>
    )

}
import {Col} from "react-bootstrap";


export const ProjectCard = ({title, description, imgUrl, url}) => {
    return (
        <Col sm={6} md={4} >
            
            <div className="proj-imgbx">
            <a target="_blank" href={url}><img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </a>    
            </div>    
        </Col>
    )
};
import './Experience.css';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import { Laptop, BoxArrowUpRight } from 'react-bootstrap-icons';

function setExperienceIcon(iconProp) {
    switch (iconProp) {
        case Laptop:
            return <Laptop size={40} className='experience-title-icon' />;
        default:
            return <div>Unknown Component</div> 
    }
}

function Experience(props) {
    return (
        <Col md={4}>
            <div className="experience-container dark-style">
                <div className="experience-title">
                    {
                        setExperienceIcon(props.icon)
                    }
                    {/* <Laptop size={40} className='experience-title-icon' /> */}
                    <h3 className='experience-heading'>{props.heading1}<br></br>{props.heading2}</h3>
                </div>
                <p>{props.description}</p>
                <a href={props.link} target="_blank" rel="noreferrer" className='experience-linkedin-link'>
                    <p className='experience-linkedin-link-text inline-block'>My LinkedIn</p>
                    <BoxArrowUpRight size={20} className='experience-linkedin-link-icon inline-block' />
                </a>
            </div>
        </Col>
    );
}

export default Experience;
import './Experience.css';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import { Laptop, AwardFill, Linkedin, BoxArrowUpRight } from 'react-bootstrap-icons';

function Experience() {
    return (
        <Row>
            <Col md={4}>
                <div className="experience-container dark-style">
                    <div className="experience-title">
                        <Laptop size={40} className='experience-title-icon' />
                        <h3 className='experience-heading'>Front-End<br></br>Engineer</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="https://linkedin.com/in/codyfontes" target="_blank" rel="noreferrer" className='experience-linkedin-link'>
                        <p className='experience-linkedin-link-text inline-block'>My LinkedIn</p>
                        <BoxArrowUpRight size={20} className='experience-linkedin-link-icon inline-block' />
                    </a>
                </div>
            </Col>
        </Row>
    );
}

export default Experience;
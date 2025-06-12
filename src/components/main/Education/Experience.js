import './Experience.css';
import { Col } from "react-bootstrap";
import { House } from 'react-bootstrap-icons';
import { AwardFill } from 'react-bootstrap-icons';

function Experience() {
    return (
        <>
            <Col md={4}>
                <div className="experience-container dark-style">
                    <div className="experience-title">
                        <House size={25} className='experience-title-icon' />
                        <h3>Experience #1</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <AwardFill size={60} className='experience-status-icon' />
                </div>
            </Col>
        </>
    );
}

export default Experience;
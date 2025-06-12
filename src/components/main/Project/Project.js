import './Project.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { House } from 'react-bootstrap-icons';

function Project() {
    return (
        <Row className="projects-container">
            <Col md={4}>
                <a href="https://github.com/kyle-b-smith/portfolio" target="_blank" rel="noreferrer" className='project-link dark-style'>
                    <House size={60} className='project-icon' />
                </a>
                <h3>Project #1</h3>
            </Col>
        </Row>
    );
}

export default Project;
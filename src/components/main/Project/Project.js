import './Project.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { HousesFill } from 'react-bootstrap-icons';

function Project() {
    return (
        <Row>
            <Col md={4}>
                <a href="https://github.com/kyle-b-smith/portfolio" target="_blank" rel="noreferrer" className='project-link dark-style'>
                    <HousesFill size={60} className='project-icon' />
                </a>
                <h3>Cool Project</h3>
            </Col>
        </Row>
    );
}

export default Project;
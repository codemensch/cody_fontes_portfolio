import './Project.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { HousesFill } from 'react-bootstrap-icons';

function setProjectIcon(iconProp) {
    switch (iconProp) {
        case HousesFill:
            return <HousesFill size={60} className='project-icon' />;
        default:
            return <div>Unknown Component</div> 
    }
}

function Project(props) {
    return (
        <Row>
            <Col md={4}>
                <a href={props.link} target="_blank" rel="noreferrer" className='project-link dark-style'>
                    {
                        setProjectIcon(props.icon)
                    }
                </a>
                <h3>Cool Project</h3>
            </Col>
        </Row>
    );
}

export default Project;
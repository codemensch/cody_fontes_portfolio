import './Project.css';
import Col from 'react-bootstrap/Col';

import { HousesFill } from 'react-bootstrap-icons';

function selectProjectIcon(iconProp) {
    switch (iconProp) {
        case HousesFill:
            return <HousesFill size={60} className='project-icon' />;
        default:
            return <div>Unknown Component</div> 
    }
}

function Project(props) {
    return (
        <Col md={4} className="project-container">
            <a href={props.link} target="_blank" rel="noreferrer" className='project-link dark-style'>
                {
                    selectProjectIcon(props.icon)
                }
            </a>
            <h3>Cool Project</h3>
        </Col>
    );
}

export default Project;
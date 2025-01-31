import './Project.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Project() {
    return (
        <Row className="project-container">
            <Col md={12}>
                <a href="https://github.com/kyle-b-smith/portfolio" target="_blank" rel="noreferrer">
                    <i class="bi bi-house"></i>
                </a>
            </Col>
        </Row>
    );
}

export default Project;
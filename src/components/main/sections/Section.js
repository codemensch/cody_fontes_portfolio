import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Section({title}) {
    return (
        <Row className="section-container">
            <Col md={12}>
                <h2>{title}</h2>
            </Col>
        </Row>
    );
}

export default Section;
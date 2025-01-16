import "./Footer.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <Container className="footer-container" fluid>
            <Row>
                <Col>
                    <p>let's connect</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
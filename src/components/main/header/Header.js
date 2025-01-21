import './Header.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
    return (
        <Row className='header-container'>
            <Col md={12}>
                <h1>Hi, I'm Cody Fontes, Software Engineer.</h1>
                <p className="subtitle">Feel free to check out what I'm building, and don't forget to say hi!</p>
            </Col>
        </Row>
    );
}
export default Header;
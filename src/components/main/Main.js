import './Main.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Main() {
    return (
        <Container fluid className="main-container">
            <Row className='title-header-container'>
                <Col md={12}>
                    <header>
                        <h1>Hi, I'm Cody Fontes, Software Engineer.</h1>
                        <p className="subtitle">Feel free to check out what I'm building, and don't forget to say hi!</p>
                    </header>
                </Col>
            </Row>
            <Row className='section-container'>
                <Col md={12}>
                    <h2>projects</h2>
                </Col>
            </Row>
            <Row className='section-container'>
                <Col md={12}>
                    <h2>education</h2>
                </Col>
            </Row>
            <Row className='section-container'>
                <Col md={12}>
                    <h2>about</h2>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;
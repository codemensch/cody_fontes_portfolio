import './Main.css'
import headshot from '../../assets/images/cody_headshot_square.png';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Project from './Project/Project';
import Experience from './Education/Experience';

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
            <div className='main-content'>
                {/* Projects */}
                <Row className='section-container'>
                    <Col md={12}>
                        <h2>projects</h2>
                    </Col>
                </Row>
                <Row>
                    <Project />
                </Row>

                {/* Experience */}
                <Row className='section-container'>
                    <Col md={12}>
                        <h2>experience | education</h2>
                    </Col>
                </Row>
                <Row>
                    <Experience />
                </Row>

                {/* About */}
                <Row className='section-container'>
                    <Col md={12}>
                        <h2>about</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <p>Lorem ipsum dolor sit amet, enim ad minim veniam, quis nostrud exercitation commodo consequat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur et dolore magna aliqua.</p>
                    </Col>
                    <Col md={6}>
                        <img src={headshot} alt="Headshot of Cody Fontes" className='about-image'/>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}
export default Main;
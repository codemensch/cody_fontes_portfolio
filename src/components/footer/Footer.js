import './Footer.css';
import logoCF from '../../assets/images/Cody-Logomark_Final.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Envelope } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';

function Footer() {
    return (
         <Container className="footer-container" fluid>
            <footer>
                <Row>
                    <Col md={12}>
                        <h3>let's connect</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <img src={logoCF} alt="Cody Fontes logo" className='logo-image'/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <ul className='footer-links'>
                            <li>
                                <a href="mailto:cody.fontes@gmail.com">
                                    <Envelope className='icon-footer' title="Cody Fontes's email address"/>
                                </a>
                            </li>
                            <li className='middle-link'>
                                <a href="https://www.linkedin.com/in/codyfontes/">
                                    <Linkedin className='icon-footer' title="Cody Fontes's LinkedIn profile" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/codemensch">
                                    <Github className='icon-footer' title="Cody Fontes's Github profile" />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </footer>
         </Container>
    );
}

export default Footer;
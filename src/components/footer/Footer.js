import './Footer.css';
import logoCF from '../../assets/images/Cody-Logomark_Final.png';
import Container from 'react-bootstrap/Container';

import { EnvelopeFill, Linkedin, Github } from 'react-bootstrap-icons';

function Footer() {
    return (
         <Container className="footer-container" fluid>
            <footer>
                <img src={logoCF} alt="Cody Fontes logo" className='logo-image'/>
                <h2 className='footer-heading'>let's connect</h2>
                <ul className='footer-links'>
                    <li>
                        <a href="mailto:cody.fontes@gmail.com">
                            <EnvelopeFill className='icon-footer' title="Cody Fontes's email address" size={40} />
                        </a>
                    </li>
                    <li className='middle-link'>
                        <a href="https://www.linkedin.com/in/codyfontes/">
                            <Linkedin className='icon-footer' title="Cody Fontes's LinkedIn profile" size={40} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/codemensch">
                            <Github className='icon-footer' title="Cody Fontes's Github profile" size={40} />
                        </a>
                    </li>
                </ul>
            </footer>
         </Container>
    );
}

export default Footer;
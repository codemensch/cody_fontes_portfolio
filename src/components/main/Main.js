import './Main.css'
import headshot from '../../assets/images/cody_headshot_square.png';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Projects Icons
import { HousesFill } from 'react-bootstrap-icons';
// Experiences Icons
import { Laptop } from 'react-bootstrap-icons';

import Project from './Project/Project';
import Experience from './Education/Experience';

const projects = [
    {
        name: "real-estate",
        link: "https://liveproject.com",
        icon: HousesFill,
        label: "Tax Real Estate API"
    },
    {
        name: "real-estate",
        link: "https://liveproject.com",
        icon: HousesFill,
        label: "Tax Real Estate API"
    },
    {
        name: "real-estate",
        link: "https://liveproject.com",
        icon: HousesFill,
        label: "Tax Real Estate API"
    },
    {
        name: "real-estate",
        link: "https://liveproject.com",
        icon: HousesFill,
        label: "Tax Real Estate API"
    }
];

const experiences = [
    {
        name: "work",
        icon: Laptop,
        heading1: "Front-End",
        heading2: "Engineering",
        description: "4+ Years Enterprise-level UI Engineering experience at VMware. Experience in: feature development, code testing and pipeline management.",
        link: "https://liveproject.com",
    },
    {
        name: "work",
        icon: Laptop,
        heading1: "Front-End",
        heading2: "Engineering",
        description: "4+ Years Enterprise-level UI Engineering experience at VMware. Experience in: feature development, code testing and pipeline management.",
        link: "https://liveproject.com",
    },
    {
        name: "work",
        icon: Laptop,
        heading1: "Front-End",
        heading2: "Engineering",
        description: "4+ Years Enterprise-level UI Engineering experience at VMware. Experience in: feature development, code testing and pipeline management.",
        link: "https://liveproject.com",
    },
];

function Main() {
    return (
        <Container fluid className="main-container">
            <Row className='title-header-container'>
                <Col md={12}>
                    <header>
                        <h1>Hi, I'm Cody Fontes, Software Engineer.</h1>
                        <p className="subtitle">Check out what I'm building, and don't forget to say hi!</p>
                    </header>
                </Col>
            </Row>
            <div className='main-content'>
                {/* Projects */}
                <div className='section-container'>
                    <h2>projects</h2>
                    <Row>
                        {
                            projects.map((project) => {
                                return <Project link={project.link} icon={project=project.icon} label={project.label} />
                            })
                        }
                    </Row>
                </div>

                {/* Experience */}
                <div className='section-container'>
                    <h2>experiences</h2>
                    <Row>
                        {
                            experiences.map((experience) => {
                                return <Experience icon={experience.icon} heading1={experience.heading1} heading2={experience.heading2} description={experience.description} link={experience.link} />
                            })
                        }
                    </Row>
                </div>

                {/* About */}
                <div className='section-container'>
                    <h2>about</h2>
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
            </div>
        </Container>
    );
}
export default Main;
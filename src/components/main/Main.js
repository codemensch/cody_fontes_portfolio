import './Main.css'
import Header from './header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Section from './Sections/Section';

function Main() {
    return (
        <Container fluid className="main-container">
            <Header />
            <Section title="projects" />
            <Section title="education" />
            <Section title="about" />
        </Container>
    );
}

export default Main;
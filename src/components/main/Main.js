import './Main.css'
import Header from './header/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Main() {
    return (
        <Container fluid className="main-container">
            <Header />
        </Container>
    );
}

export default Main;
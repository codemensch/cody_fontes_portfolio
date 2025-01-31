import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';
import logo from './assets/images/cody-c.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
}
 
export default App;

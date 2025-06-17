import './App.css';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
}
 
export default App;

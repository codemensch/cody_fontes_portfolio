import logo from '../../assets/images/cody-c.png';
import './Header.css';

function Header() {
    return (
        <header className="app-header">
            <img src={logo} className="logo" alt="logo" />
        </header>
    );
  }

  export default Header;

import './Header.css';
import logo from "../img/LiveDune.svg";
import { Link } from 'react-router-dom';

function Header({p_text, btn_text, loggedIn, path}) {

  if (loggedIn) {
    return (
      <header className="header">
        <img className="logo" src={logo} alt="Logo company" width="120" height="40"></img>
        <Link to="/" className="exit-button">{btn_text}</Link>
      </header>
    );
  }

  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo company" width="120" height="40"></img>
      <p className='text-grey'>{p_text}</p>
      <Link to={path} className="blue-button">{btn_text}</Link>
    </header>
  );
}

export default Header;

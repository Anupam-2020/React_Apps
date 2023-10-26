import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav className="navHeader">
      <div>
        <Link to={"/"}>
          <li style={{fontWeight: 'bold'}}>Auth App</li>
        </Link>
      </div>
      <div className="header-right">
        <Link to={'/'}>
          <li>Home</li>
        </Link>
        <Link to={'/about'}>
          <li>About</li>
        </Link>
        <Link to={'/sign-in'}>
          <li>Sign In</li>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <img
            src="../../public/images/Logoipsum-logo.svg"
            alt="Logo"
            style={{ height: "75px" }}
          />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <button>Login / Sign Up</button>
      </div>
    </header>
  );
};

export default Header;

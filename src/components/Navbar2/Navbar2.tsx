import "./Navbar2.css";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/about" className="navbar-item">
          About
        </Link>
        <Link to="/skills" className="navbar-item">
          Skills
        </Link>
        <Link to="/work" className="navbar-item">
          Work
        </Link>
        <Link to="/contact" className="navbar-item">
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar2;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { BsFillHouseFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { BsTools } from 'react-icons/bs';
import { FaBriefcase } from 'react-icons/fa';
import { FaEnvelopeOpenText } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="scene">
          <Link to="/" className="link active">
            <div className="box">
              <div className="front face">
                {/* <i className="fa-solid fa-house center"></i> */}
                <BsFillHouseFill className="center" />
              </div>
              <div className="right face">
                <p className="text center">Home</p>
              </div>
            </div>
          </Link>
        </li>

        <li className="scene">
          <Link to="/about">
            <div className="box">
              <div className="front face">
                {/* <i className="fa-solid fa-user center"></i> */}
                <FaUser className="center" />
              </div>
              <div className="right face">
                <p className="text center">About</p>
              </div>
            </div>
          </Link>
        </li>

        <li className="scene">
          <Link to="/skills">
            <div className="box">
              <div className="front face">
                {/* <i className="fa-solid fa-school center"></i> */}
                <BsTools className="center" />
              </div>
              <div className="right face">
                <p className="text center">Skills</p>
              </div>
            </div>
          </Link>
        </li>

        <li className="scene">
          <Link to="/work">
            <div className="box">
              <div className="front face">
                {/* <i className="fa-solid fa-briefcase center"></i> */}
                <FaBriefcase className="center" />
              </div>
              <div className="right face">
                <p className="text center">Work</p>
              </div>
            </div>
          </Link>
        </li>

        <li className="scene">
          <Link to="/contact" className="link active">
            <div className="box">
              <div className="front face">
                {/* <i className="fa-solid fa-envelope-open-text center"></i> */}
                <FaEnvelopeOpenText className="center" />
              </div>
              <div className="right face">
                <p className="text center">Contact</p>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

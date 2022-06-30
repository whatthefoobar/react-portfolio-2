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
        <li class="scene">
          <Link to="/" class="link active">
            <div class="box">
              <div class="front face">
                {/* <i class="fa-solid fa-house center"></i> */}
                <BsFillHouseFill className="center" />
              </div>
              <div class="right face">
                <p class="text center">Home</p>
              </div>
            </div>
          </Link>
        </li>

        <li class="scene">
          <Link to="/about">
            <div class="box">
              <div class="front face">
                {/* <i class="fa-solid fa-user center"></i> */}
                <FaUser className="center" />
              </div>
              <div class="right face">
                <p class="text center">About</p>
              </div>
            </div>
          </Link>
        </li>

        <li class="scene">
          <Link to="/skills">
            <div class="box">
              <div class="front face">
                {/* <i class="fa-solid fa-school center"></i> */}
                <BsTools className="center" />
              </div>
              <div class="right face">
                <p class="text center">Skills</p>
              </div>
            </div>
          </Link>
        </li>

        <li class="scene">
          <Link to="/work">
            <div class="box">
              <div class="front face">
                {/* <i class="fa-solid fa-briefcase center"></i> */}
                <FaBriefcase className="center" />
              </div>
              <div class="right face">
                <p class="text center">Work</p>
              </div>
            </div>
          </Link>
        </li>

        <li class="scene">
          <Link to="/contact" class="link active">
            <div class="box">
              <div class="front face">
                {/* <i class="fa-solid fa-envelope-open-text center"></i> */}
                <FaEnvelopeOpenText className="center" />
              </div>
              <div class="right face">
                <p class="text center">Contact</p>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            British Chamber of Commerce - Macao
            <img src={Logo} alt="Logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/members"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Membership
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/committees"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Committees
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/csr" className="nav-links" onClick={closeMobileMenu}>
                CSR
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/join" className="nav-links-mobile" onClick={closeMobileMenu}>
                Join
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

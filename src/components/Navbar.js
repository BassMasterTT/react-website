import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import Logo from './logo.png';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* <img src={Logo} alt="Logo" /> */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            B.C.C. - Macao
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
              <Link
                to="/join"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Join
              </Link>
            </li>
          </ul>

          {button && <Button buttonStyle="btn--outline">JOIN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

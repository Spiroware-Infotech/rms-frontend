import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AppRoutes } from "../../utils/constant";
import { isAuthenticated, logout } from "../../utils/helper/helper";
import { UserContext } from "../../utils/UseContext/UserContext";

function Header() {

  const navigate = useNavigate();
  const { isUserRegistered, setIsUserRegistered } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout(setIsUserRegistered);
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    console.log("isUserRegistered (reactive):", isUserRegistered);
  }, [isUserRegistered]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('#mm-menu') && !event.target.closest('.btn_mobile')) {
        closeMenu();
      }
      // closeMenu();
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  // Inline styles for mobile menu
  const mobileMenuStyles = {
    position: 'fixed',
    top: 0,
    left: menuOpen ? '0' : '-280px',
    width: '280px',
    height: '100vh',
    background: '#1a1a1a',
    zIndex: 9999,
    transition: 'left 0.3s ease-in-out',
    overflowY: 'auto'
  };

  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.5)',
    opacity: menuOpen ? 1 : 0,
    visibility: menuOpen ? 'visible' : 'hidden',
    transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
    zIndex: 9998
  };

  const btnMobileStyles = {
    background: 'none',
    border: 'none',
    padding: 0,
    margin: 0,
    cursor: 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
    color: 'inherit',
    outline: 'none',
    boxShadow: 'none',
    width: 'auto',
    height: 'auto'
  };

  const hamburgerStyles = {
    padding: '15px',
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'opacity 0.15s linear',
    backgroundColor: 'transparent',
    border: 0,
    margin: 0,
    overflow: 'visible',
    width: 'auto',
    height: 'auto'
  };

  const hamburgerBoxStyles = {
    width: '40px',
    height: '24px',
    display: 'inline-block',
    position: 'relative'
  };

  const hamburgerInnerStyles = {
    display: 'block',
    top: '50%',
    marginTop: '-2px',
    width: '40px',
    height: '4px',
    backgroundColor: isScrolled ? 'black' : 'white',
    borderRadius: '4px',
    position: 'absolute',
    transition: 'transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    transform: menuOpen ? 'rotate(225deg)' : 'none'
  };

  const hamburgerBeforeStyles = {
    content: '""',
    display: 'block',
    width: '40px',
    height: '4px',
    backgroundColor: isScrolled ? 'black' : 'white',
    borderRadius: '4px',
    position: 'absolute',
    top: menuOpen ? '0' : '-10px',
    opacity: menuOpen ? 0 : 1,
    transition: menuOpen
      ? 'top 0.1s ease-out, opacity 0.1s 0.12s ease-out'
      : 'top 0.1s 0.25s ease-in, opacity 0.1s ease-in'
  };

  const hamburgerAfterStyles = {
    content: '""',
    display: 'block',
    width: '40px',
    height: '4px',
    backgroundColor: isScrolled ? 'black' : 'white',
    borderRadius: '4px',
    position: 'absolute',
    bottom: menuOpen ? '0' : '-10px',
    transform: menuOpen ? 'rotate(-90deg)' : 'none',
    transition: menuOpen
      ? 'bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1)'
      : 'bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  };

  const panelStyles = {
    background: '#1a1a1a',
    padding: 0
  };

  const navbarStyles = {
    background: '#333',
    padding: '15px 20px',
    borderBottom: '1px solid #444'
  };

  const titleStyles = {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    textDecoration: 'none'
  };

  const listStyles = {
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const listItemStyles = {
    borderBottom: '1px solid #333'
  };

  const linkStyles = {
    display: 'block',
    padding: '15px 20px',
    color: '#fff',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease'
  };

  const bottomNavbarStyles = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: '#333',
    padding: '10px 20px',
    borderTop: '1px solid #444'
  };

  const bottomLinkStyles = {
    color: '#999',
    textDecoration: 'none',
    fontSize: '12px'
  };

  const btnLinkStyles = {
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    padding: 0,
    textAlign: 'left',
    width: '100%'
  };

  const visuallyHiddenStyles = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: 0
  };

  return (
    <header className="header mm-slideout">
      <div id="logo">
        <Link to={AppRoutes.Home} title="Reviews Management App">
          <img
            src="/assets/img/prs-logo.png"
            width="120"
            height="55"
            alt=""
            className="logo_normal"
          />
          <img
            src="/assets/img/prs-logo.png"
            width="120"
            height="55"
            alt=""
            className="logo_sticky"
          />
        </Link>
      </div>

      <ul id="top_menu">
        <li>
          {isAuthenticated() ? (
            <button
              id="sign-in"
              className="login"
              title="Logout"
              onClick={handleLogout}
            >
              Sign Out
            </button>
          ) : (
            <Link
              to={AppRoutes.LoginPage}
              className="login"
              title="Sign In"
            >
              Sign In
            </Link>
          )}
        </li>
      </ul>

      <button
        className="btn_mobile"
        style={btnMobileStyles}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="mm-menu"
        onClick={toggleMenu}
        type="button"
      >
        <span style={visuallyHiddenStyles}>Toggle menu</span>
        <div style={hamburgerStyles}>
          <div style={hamburgerBoxStyles}>
            <div style={hamburgerInnerStyles}>
              <div style={hamburgerBeforeStyles}></div>
              <div style={hamburgerAfterStyles}></div>
            </div>
          </div>
        </div>
      </button>

      {/* Overlay */}
      {menuOpen && <div style={overlayStyles} onClick={closeMenu}></div>}

      {/* Mobile Menu */}
      <nav
        id="mm-menu"
        style={mobileMenuStyles}
        aria-hidden={!menuOpen}
      >
        <div style={panelStyles}>
          <div style={panelStyles}>
            <div style={navbarStyles}>
              <Link style={titleStyles}>MENU</Link>
            </div>
            <ul style={listStyles}>
              <li style={listItemStyles}>
                <span>
                  <Link
                    to={AppRoutes.Home}
                    onClick={closeMenu}
                    style={linkStyles}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    Home
                  </Link>
                </span>
              </li>
              <li style={listItemStyles}>
                <span>
                  <Link
                    to={AppRoutes.BlogsPage}
                    onClick={closeMenu}
                    style={linkStyles}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    Blogs
                  </Link>
                </span>
              </li>
              {!isUserRegistered && (
                <li style={listItemStyles}>
                  <span>
                    <Link
                      to={AppRoutes.RegisterPage}
                      onClick={closeMenu}
                      style={linkStyles}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      Register
                    </Link>
                  </span>
                </li>
              )}
              <li style={listItemStyles}>
                <span>
                  {isAuthenticated() ? (
                    <button
                      style={{ ...btnLinkStyles, ...linkStyles }}
                      onClick={() => {
                        handleLogout();
                        closeMenu();
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      Sign Out
                    </button>
                  ) : (
                    <Link
                      to={AppRoutes.LoginPage}
                      onClick={closeMenu}
                      style={linkStyles}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      Sign In
                    </Link>
                  )}
                </span>
              </li>
            </ul>
          </div>

          <div style={bottomNavbarStyles}>
            <a href="#0" style={bottomLinkStyles}>© 2024 Your App</a>
          </div>
        </div>
      </nav>

      {/* Regular Desktop Menu */}
      <nav id="menu" className="main-menu desktop-menu" style={{ display: window.innerWidth > 768 ? 'block' : 'none' }}>
        <ul>
          <li>
            <span>
              <Link to={AppRoutes.Home}>Home</Link>
            </span>
          </li>
          <li>
            <span>
              <Link to={AppRoutes.BlogsPage}>Blogs</Link>
            </span>
          </li>
          <li>
            <span>
              {isUserRegistered ? (
                ""
              ) : (
                <Link to={AppRoutes.RegisterPage}>
                  Register
                </Link>
              )}
            </span>
          </li>
          <li>
            <span>
              <Link to={AppRoutes.LoginPage}>Login</Link>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
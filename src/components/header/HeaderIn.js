import React, { useContext, useEffect,useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AppRoutes } from "../../utils/constant";
import { isAuthenticated, logout } from "../../utils/helper/helper";
import { UserContext } from "../../utils/UseContext/UserContext";

const HeaderIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isUserRegistered, setIsUserRegistered } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollOn,setOnscroll] = useState(false)

  const handleLogout = () => {
    logout(setIsUserRegistered); // Properly logs out
    navigate("/"); // Optional redirect
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const transparentsRoutes = ["/organization", "/dashboard", "/user/dashboard"];
  const isHeadercls = transparentsRoutes.includes(location.pathname);

  useEffect(() => {
    console.log("isUserRegistered (reactive):", isUserRegistered);
  }, [isUserRegistered]);

  useEffect(()=>{
    const handleClickOutside = (event) =>{
      if (menuOpen && !event.target.closest('#mm-menu') && !event.target.closest('.btn_mobile')) {
        closeMenu();
      }
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
  },[menuOpen]);

  useEffect(()=>{
    const setscrollOn = () =>{
      setOnscroll(window.scrollY > 0);
    };
    window.addEventListener('scroll',setscrollOn);
    return ()=> window.removeEventListener('scroll',setscrollOn);
  })

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
    height: '3px',
    backgroundColor: scrollOn ? 'white' : 'black',
    borderRadius: '4px',
    position: 'absolute',
    transition: 'transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    transform: menuOpen ? 'rotate(225deg)' : 'none'
  };

  const hamburgerBeforeStyles = {
    content: '""',
    display: 'block',
    width: '40px',
    height: '3px',
    backgroundColor: scrollOn ? "white" : 'black',
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
    height: '3px',
    backgroundColor: scrollOn ? 'white':'black',
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
    padding: "0"
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
    <header
      className={isHeadercls ? "header_in is_fixed mm-slideout" : "header_in"}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12">
            <div id="logo">
              <Link to={AppRoutes.Home}>
                <img
                  src="/assets/img/prs-logo.png"
                  width="120"
                  height="55"
                  alt=""
                  className="logo_sticky"
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-9 col-12">
            <ul id="top_menu">
              <li>
                <span>
                  {isAuthenticated() ? (
                    <>
                      <Link id="sign-in" className="login" title="Logout" onClick={handleLogout} style={{ marginTop: '7px' }}>
                        Logout
                      </Link>
                    </>
                  ) : ('')}
                </span>
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
              <span style={visuallyHiddenStyles}> Toggle Menu</span>
              <div style={hamburgerStyles}>
                <div style={hamburgerBoxStyles}>
                  <div style={hamburgerInnerStyles}>
                    <div style={hamburgerBeforeStyles}></div>
                    <div style={hamburgerAfterStyles}></div>
                  </div>
                </div>
              </div>
            </button>

            {menuOpen && <div style={overlayStyles} onClick={closeMenu} ></div>}

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
                          HOME
                        </Link>
                      </span>
                    </li>
                    <li style={listItemStyles}>
                      <span>
                        <Link
                          to={AppRoutes.Home}
                          onClick={closeMenu}
                          style={linkStyles}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                        >
                          Write a review
                        </Link>
                      </span>
                    </li>
                    <li style={listItemStyles}>
                      <span>
                        <Link
                          to={AppRoutes.Home}
                          onClick={closeMenu}
                          style={linkStyles}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                        >
                          Blogs
                        </Link>
                      </span>
                    </li>
                    <li style={listItemStyles}>
                      <span>
                        <Link
                          to={AppRoutes.Home}
                          onClick={closeMenu}
                          style={linkStyles}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                        >
                          Register
                        </Link>
                      </span>
                    </li>
                    <li style={listItemStyles}>
                      <span>
                        <Link
                          to={AppRoutes.Home}
                          onClick={closeMenu}
                          style={linkStyles}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                        >
                          Login
                        </Link>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <nav id="menu" className="main-menu desktop-menu" style={{ display: window.innerWidth > 768 ? 'block' : 'none' }}>
              <ul>
                <li>
                  <span>
                    <Link to={AppRoutes.Home}>Menu</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link to={isAuthenticated() ? "/reviewform" : `${AppRoutes.UserRegisterPage}?redirect=/reviewform`}>
                      <span class="btn_top">Write a Review</span>
                    </Link>
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderIn;

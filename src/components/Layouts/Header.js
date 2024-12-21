import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll's Link as ScrollLink
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";

const Header = () => {
  const [nav, setNav] = useState(false);

  // Scroll Navbar - change navbar style on scroll
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", changeValueOnScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", changeValueOnScroll);
    };
  }, []);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`} // Apply sticky class when scrolled
      >
        <Container>
          <Navbar.Brand href="#home">
            <ScrollLink to="homeSection" smooth={true} duration={500} className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </ScrollLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <ScrollLink to="homeSection" smooth={true} duration={500}>Home</ScrollLink>
              </Nav.Link>
              <Nav.Link>
                <ScrollLink to="aboutSection" smooth={true} duration={500}>About</ScrollLink>
              </Nav.Link>
              <Nav.Link>
                <ScrollLink to="menuSection" smooth={true} duration={500}>Menu</ScrollLink>
              </Nav.Link>
              <Nav.Link>
                <ScrollLink to="promotionSection" smooth={true} duration={500}>Promotion</ScrollLink>
              </Nav.Link>
              <Nav.Link>
                <ScrollLink to="shopSection" smooth={true} duration={500}>Shop</ScrollLink>
              </Nav.Link>
              <Nav.Link>
                <ScrollLink to="blogSection" smooth={true} duration={500}>Reviews</ScrollLink>
              </Nav.Link>
              <Nav.Link>
                <ScrollLink to="contactSection" smooth={true} duration={500}>Contact</ScrollLink>
              </Nav.Link>
              <Nav.Link as={ScrollLink} to="/">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

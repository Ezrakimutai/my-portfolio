import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  }
  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home"><img src={"url(./src/assets/img/logo.svg)"} alt="LOGO" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="Navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>

            </Nav>
            <span className="navbar-text">
              <div className='social-icon'>
              <img src={"url(./src/assets/img/nav-icon1.svg)"} alt="ICON" />
              <img src={"url(./src/assets/img/nav-icon2.svg)"} alt="ICON" />
              <img src={"url(./src/assets/img/nav-icon3.svg)"} alt="ICON" />
              </div>
              <button className="vvd"><span>Lets Connect</span></button>

            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar


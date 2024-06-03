import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import React from 'react';
import './Menu.css';

const Menu = () => {

    function handleNavClick(event) {
        event.preventDefault(); // Zapobiegamy domyślnej akcji przeglądarki
        const targetId = event.target.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    return (
            <Navbar variant="dark" sticky="top" expand="lg" className="navbar-custom" data-aos="slide-down">
                <Container className="mb-4">
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="64"
                            height="64"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav  variant="underline" defaultActiveKey="#home" className="me-auto">
                            <Nav.Link href="#home" onClick={handleNavClick}>GŁÓWNA</Nav.Link>
                            <Nav.Link href="#team" onClick={handleNavClick}>NASZ ZESPÓŁ</Nav.Link>
                            <Nav.Link href="#films" onClick={handleNavClick}>FILMY</Nav.Link>
                            <Nav.Link href="#about" onClick={handleNavClick}>O NAS</Nav.Link>
                            <Nav.Link href="#offer" onClick={handleNavClick}>OFERTA</Nav.Link>
                            <Nav.Link href="https://discord.gg/techcode">DISCORD</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}
export default Menu;
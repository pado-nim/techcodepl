import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/logo.png'; // Importuj logo

import './Header.css';

const Header = () => {
  return (
    <header className="header" id="home">
      <Container>
        <Row className="justify-content-center align-items-center py-3">
          <Col xs={6} md={4} lg={3}>
            <img width="614px" height="614px" src={logo} alt="Logo" className="img-fluid logo" data-aos="fade-in"/>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;

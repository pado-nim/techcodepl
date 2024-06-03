import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { FaYoutube, FaTiktok, FaDiscord, FaFacebook } from 'react-icons/fa';
import logo from '../../assets/logo.png'; // Importuj logo

const Footer = () => {
    return (<footer>
        <Container fluid>
            <Row className="flex-wrap footer-content">
                <Col xs={12} md={4} className="text-center pa-2">
                    <hgroup>
                        <img src={logo} width="100px" height="100px" />
                        <h2>TechCode</h2>
                        <h3>Tworzymy z myślą o Tobie.</h3>
                    </hgroup>
                </Col>
                <Col xs={12} md={4} className="p2 mt-5">
                    <ul>
                        <li><a href="https://www.youtube.com/@Vatiaz"><FaYoutube /> YouTube</a></li>
                        <li><a href="#"><FaDiscord /> Discord</a></li>
                        <li><a href="#"><FaTiktok/> Tiktok</a></li>
                        <li><a href="#"><FaFacebook/> Facebook</a></li>
                    </ul>
                </Col>
                <Col xs={12} md={4} className="text-justify p2">
                    <h2>
                        F.A.Q
                    </h2>
                    <ol>
                        <li>
                            Gdzie mogę złożyć zamówienie? - Zamówienie możesz złożyć poprzez naszego discorda
                        </li>
                        <li>
                            Czy mogę dołączyć do waszej ekipy? - Tak, aktualnie prowadzimy rekrutację na naszym discordzie.
                        </li>
                        <li>
                            Jaki jest czas oczekiwania na wtyczkę? - Zależnie od ilości zleceń oraz ich wielkości, ale staramy się aby ten
                            czas był jak najkrótszy - nie sięgający powyżej 24h w przypadku małych projektów.
                        </li>
                    </ol>
                </Col>
                <Col className="text-center">
                <p>Copyright 2024 &copy; TechCode. Strona stworzona przez <a href="https://github.com/pado-nim">Seweryna</a></p>
                </Col>
            </Row>
        </Container>
    </footer>)
}
export default Footer;
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';

import './Item.css';

const About = () => {
    return (
        <section className="section offersection text-center d-flex align-items-center" id="about">
            <Container fluid>
                <Row>
                    <h1 className="offer-title p-1" data-aos="slide-left">TROCHE O <span className="green">NAS</span></h1>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} md={8} data-aos="fade-right">
                        <Tab.Container defaultActiveKey="first">
                            <Row>
                                <Col xs={12} md={6} lg={6} className="p-5 bg-green">
                                    <Nav variant="underline" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first" className="text-white">Dokumentacja</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second" className="text-white">Wsparcie techniczne</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third" className="text-white">Nowoczesne rozwiązania</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fourth" className="text-white">Społeczność</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col xs={12} md={6} lg={6} className="p-5 bg-green">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">Zapewniamy kompleksową dokumentację wraz z naszymi paczkami pluginów i samymi wtyczkami, abyś mógł cieszyć się łatwą integracją i wykorzystaniem naszych rozwiązań!</Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            Zapewniamy Ci całodobowe wsparcie techniczne za pośrednictwem ticketów na naszym serwerze Discord, gwarantując szybką i skuteczną pomoc w rozwiązywaniu wszelkich problemów!
                                            <br />
                                            Więcej informacji znajdziesz na naszym serwerze<a href="https://discord.gg/techcode" className="green" target="_blank" rel="noopener">discord</a>.
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            Z dumą przedstawiamy naszego inteligentnego bota, który pomoże Ci stworzyć zoptymalizowaną paczkę pluginów idealnie dopasowaną do Twoich potrzeb. Dzięki naszej innowacyjnej technologii, możesz szybko i łatwo dostosować funkcjonalność swojego serwera, bez względu na jego charakter czy cel.
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth">
                                            Nasza <a href="https://discord.gg/techcode" className="green" target="_blank" rel="noopener">społeczność</a> oferuje nie tylko pomoc z kodowaniem i technicznymi problemami, ale także inspirujące propozycje, emocjonujące konkursy oraz możliwość integracji z innymi pasjonatami technologii. <a href="https://discord.gg/techcode" className="green" target="_blank" rel="noopener">Dołącz już dziś</a> i ciesz się przyjazną atmosferą, pełną pozytywnej energii i możliwości rozwoju! Liczymy na Twój udział w naszych fascynujących projektach i wymianie doświadczeń. Zobacz, jak wiele możemy osiągnąć <span className="green">razem</span>!💚
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>

    );
}

export default About;
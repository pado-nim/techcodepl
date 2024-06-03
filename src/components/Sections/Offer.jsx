import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import order from '../../assets/XiqzEvo.jpeg';
import './Section.css';

const Offer = () => {

    return (
        <section className="section d-flex" id="offer">
            <Container fluid>
                <Row className="justify-content-center m-5 text-center">
                    <Col xs={12} md={9} lg={9} data-aos="slide-left">
                        <h6 className="green">ZNAJDŹ COŚ DLA SIEBIE</h6>
                        <h1 >NASZA OFERTA</h1>
                        <p>Poniżej znajdziesz liste ofert jakie możesz u nas zamówić. Wybierz opcję i dowiedz się więcej.</p>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col xs={12} md={9} lg={9}>
                        <Tabs
                            defaultActiveKey="plugins"
                            id="tab-custom"
                            className="mb-3 border-bottom "
                            variant="underline"
                            fill
                        >
                            <Tab eventKey="plugins" title="Pluginy">
                                <Row>
                                    <Col>
                                        <a href="https://discord.gg/techcode"><img src={order} width="100%" /></a>
                                    </Col>
                                    <Col xs={12} md={6} lg={6} data-aos="fade-in">
                                        <h1 className="text-justify">Pluginy Minecraft</h1>
                                        <p>
                                            Oprócz darmowych pluginów dostępnych do pobrania na naszym serwerze Discord, oferujemy także płatne, dostosowane do Twoich potrzeb! Zamów u nas spersonalizowany plugin, który spełni wszystkie Twoje wymagania.
                                        </p>
                                        <ul>
                                            <li>
                                                <b>Terminowa realizacja:</b> Produkt otrzymasz w wyznaczonym czasie.
                                            </li>
                                            <li>
                                                <b>Konkurenyjne ceny:</b> Niskie koszty za najwyższą jakość.
                                            </li>
                                            <li>
                                                <b>Licencja:</b> Po zakupie otrzymujesz licencję, która uprawnia Cię do korzystania z usługi.
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="packages" title="Paczki Pluginów">
                                <Row>
                                    <Col>
                                        <a href="https://discord.gg/techcode"><img src={order} width="100%" /></a>
                                    </Col>
                                    <Col xs={12} md={6} lg={6} data-aos="fade-in">
                                        <h1 className="text-justify">Paczki Pluginów</h1>
                                        <p>
                                            W internecie znajdziesz wiele paczek wzorowanych na popularnych serwerach, ale my stworzymy dla Ciebie unikalną paczkę na miarę Twoich potrzeb!
                                        </p>
                                        <ul>
                                            <li>
                                                <b>Personalizacja</b>: Paczki wykonane dokładnie według Twoich wytycznych.
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="bots" title="Boty Discord">
                                <Row>
                                    <Col>
                                        <a href="https://discord.gg/techcode"><img src={order} width="100%" /></a>
                                    </Col>
                                    <Col xs={12} md={6} lg={6} data-aos="fade-in">
                                        <h1 className="text-justify">Boty Discord</h1>
                                        <p>
                                            Nasze boty Discord są pisane w języku JavaScript przy użyciu pakietu discord.js w wersji v13. Wyposażone w zaawansowane funkcje, takie jak zaawansowany system rekrutacji z akceptowaniem podań uzupełnianych w formularzu.
                                        </p>
                                        <ul>
                                            <li>
                                                <b>Innowacyjność:</b> Boty Discord to jeden z naszych najpopularniejszych produktów.
                                            </li>
                                            <li>
                                                <b>Rekomendacje:</b> Większość naszych klientów poleca nasze grafiki.
                                            </li>
                                            <li>
                                                <b>Licencja:</b> Po zakupie otrzymujesz licencję, która uprawnia Cię do korzystania z usługi.
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="maps" title="Mapy Minecraft">
                                <Row>
                                    <Col>
                                        <a href="https://discord.gg/techcode"><img src={order} width="100%" /></a>
                                    </Col>
                                    <Col xs={12} md={6} lg={6} data-aos="fade-in">
                                        <h1 className="text-justify">Mapy Minecraft</h1>
                                        <p>
                                            Nasze mapy Minecraft są tworzone przez doświadczonych budowniczych, którzy potrafią zamienić Twoje wizje w rzeczywistość. Oferujemy szeroki wybór map, od przygodowych po kreatywne, dostosowane do Twoich unikalnych potrzeb.                                        </p>
                                        <ul>
                                            <li>
                                                <b>Profesjonalna jakość:</b> Mapy tworzone przez ekspertów w dziedzinie Minecrafta.
                                            </li>
                                            <li>
                                                <b>Terminowa realizacja:</b> Produkt otrzymasz w wyznaczonym czasie.
                                            </li>
                                            <li>
                                                <b>Rekomendacje:</b> Większość naszych klientów poleca nasze grafiki.
                                            </li>
                                            <li>
                                                <b>Konkurencyjne ceny:</b> Wyjątkowa jakość w przystępnych cenach.
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="graphics" title="Grafiki">
                                <Row>
                                    <Col>
                                        <a href="https://discord.gg/techcode"><img src={order} width="100%" /></a>
                                    </Col>
                                    <Col xs={12} md={6} lg={6} data-aos="fade-in">
                                        <h1 className="text-justify">Grafiki</h1>
                                        <p>
                                            Nasze grafiki są tworzone przez profesjonalistów, którzy doskonale znają się na rzeczy! Oferujemy szeroki wachlarz grafik dostosowanych do Twoich potrzeb.
                                        </p>
                                        <ul>
                                            <li>
                                                <b>Terminowa realizacja:</b> Produkt otrzymasz w wyznaczonym czasie.
                                            </li>
                                            <li>
                                                <b>Rekomendacje:</b> Większość naszych klientów poleca nasze grafiki.
                                            </li>
                                            <li>
                                                <b>Przystępne ceny:</b> Doskonała jakość w konkurencyjnych cenach.
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="trailers" title="Trailery">
                                <Row>
                                    <Col>
                                        <a href="https://discord.gg/techcode"><img src={order} width="100%" /></a>
                                    </Col>
                                    <Col xs={12} md={6} lg={6} data-aos="fade-in">
                                        <h1 className="text-justify">Trailery do serwerów Minecraft</h1>
                                        <p>
                                            Nasze trailery to doskonały sposób na zaprezentowanie Twojego serwera Minecraft i przyciągnięcie nowych graczy. Tworzymy profesjonalne, dynamiczne filmy promocyjne, które wyróżnią Twój serwer.                                        </p>
                                        <ul>
                                            <li>
                                                <b>Profesjonalna produkcja:</b> Wykonane przez doświadczonych twórców wideo.
                                            </li>
                                            <li>
                                                <b>Terminowa realizacja:</b> Produkt otrzymasz w wyznaczonym czasie.
                                            </li>
                                            <li>
                                                <b>Rekomendacje:</b> Większość naszych klientów poleca nasze trailery.
                                            </li>
                                            <li>
                                                <b>Przystępne ceny:</b> Świetna jakość w konkurencyjnych cenach.
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="sites" title="Strony WWW">
                                <Row>
                                    <Col>
                                        <a href="https://discord.gg/techcode"><img src={order} width="100%" /></a>
                                    </Col>
                                    <Col xs={12} md={6} lg={6} data-aos="fade-in">
                                        <h1 className="text-justify">Strony Internetowe</h1>
                                        <p>
                                            Oferujemy różne typy stron internetowych, w tym sklepy, portfolio, strony serwerów Minecraft/Discord/Botów Discord i wiele więcej!                                        </p>
                                        <ul>
                                            <li>
                                                <b>Profesjonalizm:</b> Strony są tworzone przez doświadczonych deweloperów.
                                            </li>
                                            <li>
                                                <b>Terminowa realizacja:</b> Produkt otrzymasz w wyznaczonym czasie.
                                            </li>
                                            <li>
                                                <b>Rekomendacje:</b> Większość naszych klientów poleca nasze strony.
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="optimization" title="Optymalizacje serwera">
                                <Row>
                                    <Col>
                                        <a href="https://discord.gg/techcode"><img src={order} width="100%" /></a>
                                    </Col>
                                    <Col xs={12} md={6} lg={6} data-aos="fade-in">
                                        <h1 className="text-justify">Optymalizacje serwera Minecraft</h1>
                                        <p>
                                            Optymalizacja serwera Minecraft to klucz do płynnej i bezproblemowej rozgrywki. Nasze usługi optymalizacji zapewniają maksymalną wydajność i minimalne opóźnienia na Twoim serwerze.
                                        </p>
                                        <ul>
                                            <li>
                                                <b>Doświadczeni specjaliści:</b> Nasz zespół ma bogate doświadczenie w optymalizacji serwerów Minecraft.
                                            </li>
                                            <li>
                                                <b>Terminowa realizacja:</b> Produkt otrzymasz w wyznaczonym czasie.
                                            </li>
                                            <li>
                                                <b>Rekomendacje:</b> Większość naszych klientów poleca nasze usługi optymalizacji.
                                            </li>
                                            <li>
                                                <b>Konkurenyjne ceny:</b> Najlepsza jakość w przystępnych cenach.
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Offer;
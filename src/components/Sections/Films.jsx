import { Container, Row, Col } from 'react-bootstrap';
import './Section.css';

const Films = () => {
    return (
        <section className="section films-content" id="films">
            <Container fluid>
                <Row className="flex-wrap">
                    <Col className="text-center">
                        <hgroup>
                            <h1 data-aos="slide-left">NASZ NAJNOWSZY <span className="green">FILM</span></h1>
                            <h3 data-aos="slide-left">Zostaw suba aby być na bieżąco z naszymi nowościami!</h3>
                        </hgroup>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center mt-5">
                    <Col>
                        <Row>
                            <Col className="iframe-container">
                                <iframe
                                    data-aos="slide-left"
                                    src="https://www.youtube.com/watch?v=llsM8HNAprE"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                ></iframe>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Films;
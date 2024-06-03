import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaYoutube, FaTiktok, FaDiscord, FaGithub } from 'react-icons/fa';

import './Section.css';

const Team = () => {

  const mates = [
    {
      nick: 'Vatiaz',
      role: 'CEO',
      description: 'Założyciel projektu, serce naszej organizacji. Zajmuje się organizacją zadań, programowaniem wtyczek oraz twórczością w social mediach.',
      skin: 'https://visage.surgeplay.com/full/256/58333e3a-247b-48da-9f35-aefb6cccfd0c',
      socials: [
        { icon: <FaYoutube />, link: 'https://www.youtube.com/user/example' },
        { icon: <FaTiktok />, link: 'https://www.tiktok.com/@example' },
        { icon: <FaDiscord />, link: 'https://discord.com/invite/example' },
        { icon: <FaGithub />, link: 'https://github.com/example' }
      ]
    },
    {
      nick: 'Kubixor',
      role: 'COO',
      description: 'Współtwórca projektu. Zajmuje się tworzeniem zestawów wtyczek, nadzorowaniem społeczności i kontaktem z klientami. Gdy mu sie nudzi przeprowadza optymalizacje serwerów i coś tam pobuduje.',
      skin: 'https://visage.surgeplay.com/full/256/b4c4f001-1cb2-4307-b35c-86bd799e22d5',
      socials: [
        { icon: <FaYoutube />, link: 'https://www.youtube.com/user/example' },
        { icon: <FaTiktok />, link: 'https://www.tiktok.com/@example' },
        { icon: <FaDiscord />, link: 'https://discord.com/invite/example' },
        { icon: <FaGithub />, link: 'https://github.com/example' }
      ]
    },
    {
      nick: 'Barmi',
      role: 'Developer',
      description: 'Zaawansowany twórca skomplikowanych botów dla waszych serwerów Discord. Zajmuje się ww. tworzeniem botów, a także tworzy paczki. W wolnych chwilach zajmuje się organizowaniem eventów dla naszej społeczności.',
      skin: 'https://visage.surgeplay.com/full/256/2a7a172f-c420-4e28-aee9-22e66435fa60',
      socials: [
        { icon: <FaYoutube />, link: 'https://www.youtube.com/user/example' },
        { icon: <FaTiktok />, link: 'https://www.tiktok.com/@example' },
        { icon: <FaDiscord />, link: 'https://discord.com/invite/example' },
        { icon: <FaGithub />, link: 'https://github.com/example' }
      ]
    },
    {
      nick: 'Seweryn',
      role: 'Developer',
      description: 'Filantrop, smakosz piwa, twórca stron internetowych, systemów CMS oraz sklepów online. Programista wtyczek, twórca paczek. Nasz ukochany "emeryt", trochę odklejony na głowie, ale zawsze pełen pomysłów. W wolnych chwilach tworzy grafiki albo relaksuje się z piwem w pubie.',
      skin: 'https://visage.surgeplay.com/full/256/282bf8dc-27de-47b9-b723-a149693294cd',
      socials: [
        { icon: <FaYoutube />, link: 'https://www.youtube.com/user/example' },
        { icon: <FaTiktok />, link: 'https://www.tiktok.com/@example' },
        { icon: <FaDiscord />, link: 'https://discord.com/invite/example' },
        { icon: <FaGithub />, link: 'https://github.com/example' }
      ]
    }
  ]

  return (
    <section className="section teamsection" id="team">
      <Container fluid>
        <Row className="flex-wrap">
          {mates.map((mate, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="my-3">
              <Card className="h-100 card-background text-light" data-aos="fade-in">
                <Row noGutters className="align-items-center">
                  <Col xs={4} md={4} lg={3}>
                    <Card.Img variant="right" src={mate.skin} alt={`${mate.nick}'s skin`} className="img-fluid p-3" />
                  </Col>
                  <Col xs={8} md={8} lg={9}>
                    <Card.Body>
                      <Card.Title className="text-center">{mate.nick} - {mate.role}</Card.Title>
                      <Card.Text>{mate.description}</Card.Text>
                      <div className="social-icons">
                        {mate.socials && mate.socials.map((social, index) => (
                          <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center mt-5">
          <Col xs={12} className="text-center">
            <hgroup className="teaminvite" data-aos="fade-in">
              <h1>Chcesz do nas <span className="green">dołączyć</span>?</h1>
              <a href="https://discord.gg/techcode"><button className="bg-button">DOŁĄCZ TERAZ!</button></a>
            </hgroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Team;

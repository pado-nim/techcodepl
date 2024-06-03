import Container from 'react-bootstrap/Container';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Team from './components/Sections/Team';
import Films from './components/Sections/Films';
import About from './components/Sections/About';
import Offer from './components/Sections/Offer';
import Footer from './components/Footer/Footer';
import './App.css';


const App = () => (
  <Container fluid>
    <Menu />
    <Header />
    <Team />
    <Films />
    <About />
    <Offer />
    <Footer />
  </Container>
);

export default App;

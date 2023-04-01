import Main from "./components/Main/Main";
import NavBar from "./components/NavBar";
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div className="App">
       <Container>
     
      <Row>
        <Col xs={6} md={4}>
        <NavBar/>
        <Main/>
        </Col>
      </Row>
     
     </Container>
    </div>
  );
}

export default App;

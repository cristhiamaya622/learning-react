import React from 'react';
import NavBar from './components/NavBar/NavBar';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';
import { Row, Col, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <Container className="app__container">
        <Row>
          <Col>
            <SearchBox></SearchBox>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

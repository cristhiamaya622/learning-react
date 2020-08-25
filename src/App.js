import React from 'react';
import NavBar from './components/NavBar/NavBar';
import SearchBox from './components/SearchBox/SearchBox';
import GenericTable from './components/GenericTable/GenericTable';
import { TableProvider } from "./contexts/tableContext";
import { Row, Col, Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <Container className="app__container">
        <Row>
          <Col>
            <TableProvider>
              <SearchBox/>
              <GenericTable/>
            </TableProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

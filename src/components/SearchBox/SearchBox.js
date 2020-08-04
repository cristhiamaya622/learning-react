import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import './SearchBox.scss';
import { Form, Container, Col, Row, Button } from 'react-bootstrap';

function SearchBox() {
  return (
    <Jumbotron className="searchbox">
      <h1 className="searchbox__title">Consentimientos</h1>
      <Container className="searchbox__container">
        <Form>
          <Row>
            <Col xs={3}>
              <Form.Group controlId="formGroupSearchSelection">
                <Form.Label className="searchbox__search-label">Búsqueda de paciente</Form.Label>
                <Form.Control
                  as="select"
                  className="mr-sm-2"
                  id="inlineFormCustomSelect"
                  custom>
                  <option value="1" selected>Nombres</option>
                  <option value="2">Apellidos</option>
                  <option value="3">Identificación</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="searchbox__search-patient-box" controlId="formGroupSearchPatientBox">
                <Form.Control placeholder="Paciente" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="formGroupSearchSelection">
                  <Form.Label className="searchbox__search-label">Tipo de Consentimiento</Form.Label>
                  <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="inlineFormCustomSelect"
                    custom>
                    <option value="1" selected>Nombres</option>
                    <option value="2">Apellidos</option>
                    <option value="3">Identificación</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Form>
      </Container>
      <Row>
        <Col>
          <Button className="searchbox__search-cta">
            Buscar
          </Button>
        </Col>
      </Row>
    </Jumbotron>
  );
}

export default SearchBox;
import React from 'react';
import './SearchBox.scss';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { UserConsumer } from "../../contexts/userContext";
import { TableConsumer } from '../../contexts/tableContext';
import { Form, Container, Col, Row, Button } from 'react-bootstrap';

function SearchBox() {

  function handleSubmit(event, handleCriteria) {
    event.preventDefault();
    const form = new FormData(event.target);
    const newPatientName = form.get("formGroupSearchPatientBox");
    const newConsentType = form.get("formGroupConsentTypeSelection");
    handleCriteria(`${newPatientName} and ${newConsentType}`);
  }

  return (
    <UserConsumer>
      {({ test }) => (
        <TableConsumer>
          {({ handleCriteria }) => (
            <Jumbotron className="searchbox">
              <Form onSubmit={(event) => handleSubmit(event, handleCriteria)}>
              {/* <Form onSubmit={handleSubmit}> */}
                <h1 className="searchbox__title">Consentimientos</h1>
                <Container className="searchbox__container">
                  <Row>
                    <Col xs={3}>
                      <Form.Group controlId="formGroupPatientTypeSelection">
                        <Form.Label className="searchbox__search-label">Búsqueda de paciente</Form.Label>
                        <Form.Control
                          defaultValue="3"
                          as="select"
                          className="mr-sm-2"
                          custom>
                          <option value="1">Nombres</option>
                          <option value="2">Apellidos</option>
                          <option value="3">Identificación</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="searchbox__search-patient-box" controlId="formGroupSearchPatientBox">
                        <Form.Control placeholder="Paciente" name="formGroupSearchPatientBox" required/>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="formGroupConsentTypeSelection">
                        <Form.Label className="searchbox__search-label">Tipo de Consentimiento</Form.Label>
                        <Form.Control
                          as="select"
                          className="mr-sm-2"
                          defaultValue="HABEAS DATA"
                          name="formGroupConsentTypeSelection"
                          custom>
                          <option value="HABEAS DATA">HABEAS DATA</option>
                          <option value="Ácido Hialurónico">Ácido Hialurónico</option>
                          <option value="Depilación">Depilación</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </Container>
                <Row>
                  <Col>
                    <Button className="searchbox__search-cta" type="submit">
                      Buscar
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Jumbotron>)}
        </TableConsumer>
      )}
    </UserConsumer>
  );
}

export default SearchBox;
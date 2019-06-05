import React from "react";
import { Jumbotron as Jumbo, Container, Form } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div``;
export const Dropdow = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay" />
      <Container>
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select">
              <option>1</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Container>
    </Jumbo>
  </Styles>
);

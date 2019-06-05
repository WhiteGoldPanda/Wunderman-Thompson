import React from "react";
import { Jumbotron as Jumbo, Container, Form } from "react-bootstrap";

class About extends React.Component {
  render() {
    return (
      <div>
        <Jumbo fluid className="jumbo">
          <div className="overlay">
            <Container>
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Example select</Form.Label>
                  <Form.Control as="select">
                    <option> </option>
                    <option>22</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Container>
          </div>
        </Jumbo>
      </div>
    );
  }
}
export default About;

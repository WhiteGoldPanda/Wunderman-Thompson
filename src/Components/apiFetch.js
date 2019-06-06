import React from "react";
import { Jumbotron as Jumbo, Container, Form } from "react-bootstrap";

class DataApi extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null
  };
  fetchUsers() {
    // Where we're fetching data from
    fetch(`https://jsonplaceholder.typicode.com/users`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          users: data,
          isLoading: false
        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { isLoading, users, error } = this.state;
    return (
      <React.Fragment>
        <Jumbo fluid className="jumbo">
          <Container>
            <h1>Random User</h1>
          </Container>
          {error ? <p>{error.message}</p> : null}

          {!isLoading ? (
            users.map(user => {
              const { username, name, email } = user;
              return (
                <Container key={user.id}>
                  <Form>
                    <Form.Group
                      controlId="exampleForm.ControlSelect1"
                      key={username}
                    >
                      <Form.Label>Name: {name}</Form.Label>
                      <Form.Control as="select">
                        <option> </option>
                        <option>Email Address: {email}</option>
                      </Form.Control>
                    </Form.Group>
                    <hr />
                  </Form>
                </Container>
              );
            })
          ) : (
            // If there is a delay in data, let's let the user know it's loading
            <h3>Loading...</h3>
          )}
        </Jumbo>
      </React.Fragment>
    );
  }
}
export default DataApi;

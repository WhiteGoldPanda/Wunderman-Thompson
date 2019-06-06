import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import axios from "axios";
//https://jsonplaceholder.typicode.com/post
class ApiPost extends React.Component {
  state = {
    userId: "",
    title: "",
    body: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <Jumbo fluid className="jumbo">
          <div className="overlay">
            <Container>
              <form onSubmit={this.submitHandler}>
                <div>
                  <input
                    type="text"
                    name="userId"
                    value={userId}
                    onChange={this.changeHandler}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={this.changeHandler}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="body"
                    value={body}
                    onChange={this.changeHandler}
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            </Container>
          </div>
        </Jumbo>
      </div>
    );
  }
}
export default ApiPost;

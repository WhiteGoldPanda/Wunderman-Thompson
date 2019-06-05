import React from "react";
import { Dropdow } from "./Stylecom/dropDown";
class About extends React.Component {
  getUsers() {
    fetch("https://jsonplaceholder.typicode.com/404")
      .then(res => {
        if (res.ok) {
          return res;
        } else {
          throw Error(`Request rejected with status ${res.status}`);
        }
      })
      .catch(console.error);
  }
  render() {
    return (
      <div>
        <h1>Hello ther</h1>
        <p>hfmbergnoenoe</p>
        <p>hfmbergnoenoe</p>
        <p>adasa</p>
        <p>hfmbergnoenoe</p>
        <Dropdow />
      </div>
    );
  }
}
export default About;

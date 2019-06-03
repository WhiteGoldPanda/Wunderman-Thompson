import React from "react";

class About extends React.Component {
  getUsers() {
    fetch("https://api.github.com/users/KrunalLathiya")
      .then(response => response.json())
      .then(data => {
        console.log(data); // Prints result from `response.json()` in getRequest
      })
      .catch(error => console.error(error));
  }
  render() {
    return (
      <div>
        <h1>Hello ther</h1>
        <p>hfmbergnoenoe</p>
        <p>hfmbergnoenoe</p>
        <p>
          hfmbergnoenohfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoehfmbergnoenoee
        </p>
        <p>hfmbergnoenoe</p>
      </div>
    );
  }
}
export default About;

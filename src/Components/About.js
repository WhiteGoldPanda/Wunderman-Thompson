import React from "react";
import DataApi from "./apiFetch";

import ApiPost from "./postData";

class About extends React.Component {
  render() {
    return (
      <div>
        <DataApi />

        <ApiPost />
      </div>
    );
  }
}
export default About;

import React, { Component } from "react";
import "tachyons";

class Robo extends Component {
  state = { name: "waqar", pictures: [] };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(data => this.setState({ pictures: data }));
  }
  render() {
    if (this.state.pictures.length === 0) return <h1>Loading</h1>;
    throw new Error("fault");

    return (
      <div className="bg-light-green dib br3 pa3 ma2 grow">
        <img src={this.state.pictures[3].url} alt="Robot" />
        <div>
          <h2>{this.state.pictures[0].id}</h2>
        </div>
      </div>
    );
  }
}

export default Robo;

import React, { Component } from "react";
import Robo from "./robo";
import Search from "./search";
import Scroll from "./scroll";
import ErrorBoundry from "./errorBoundry";

class Main extends Component {
  state = { name: "waqar" };
  handleChange = event => {
    console.log(event);
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div className="tc">
        <Search change={this.handleChange}></Search>
        <div>
          <Scroll>
            <ErrorBoundry>
              <Robo name={this.state.name} />
            </ErrorBoundry>
          </Scroll>
        </div>
      </div>
    );
  }
}

export default Main;

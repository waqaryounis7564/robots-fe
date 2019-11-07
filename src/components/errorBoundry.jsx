import React, { Component } from "react";

class ErrorBoundry extends Component {
  state = { haserror: false };
  componentDidCatch(error, info) {
    this.setState({ haserror: true });
    console.log("error", error);
    console.log("info", info);
  }
  render() {
    if (this.state.haserror) return <h1>SomeThing Goes wrong</h1>;
    return this.props.children;
  }
}

export default ErrorBoundry;

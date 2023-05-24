import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    /* if (this.state.isLoggedIn) {
      return <h1>Welcome Corey! Logged in.</h1>;
    } else {
      return <h1>Welcome Guest. Logged out.</h1>;
    } */

    let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome Corey</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }
    /* return <div>{message}</div>; */

    /* return this.state.isLoggedIn ? (
      <div>Welcome Corey</div>
    ) : (
      <div>Welcome Guest</div>
    ); */

    return this.state.isLoggedIn && <div>Welcome Corey</div>
  }
}

export default UserGreeting;

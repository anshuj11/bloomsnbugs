import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input type="text" onChange={this.handleChange("username")} />
          
        <input type="submit" />
      </form>
    );
  }
}

export default SessionForm;

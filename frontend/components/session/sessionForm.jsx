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
      <form>
        {" "}
        <div className="SessionForm">
          <input
            type="text"
            className="FormFields"
            onChange={this.handleChange("username")}
            value="username"
          />
          <input
            type="password"
            className="FormFields"
            onChange={this.handleChange("password")}
            value="password"
          />
          <button
            className="SessionButton"
            onSubmit={e => this.handleSubmit(e)}
          >
            {this.props.formType}
          </button>
        </div>
      </form>
    );
  }
}

export default SessionForm;

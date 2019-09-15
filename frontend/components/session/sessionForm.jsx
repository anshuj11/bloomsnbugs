import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    var frm = document.getElementsByName("sessionForm")[0];
    this.props.processForm(user);
    frm.reset();
    this.props.history.push("/");
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }
  renderErrors(errors) {
    return errors.map((err, ind) => (
      <li className="ErrMsg" key={ind}>
        {err}
      </li>
    ));
  }
  render() {
    return (
      <form name="sessionForm">
        {" "}
        <div className="SessionForm">
          <ul>{this.renderErrors(this.props.errors)}</ul>
          <input
            type="text"
            className="FormFields"
            onChange={this.handleChange("email")}
          />
          <input
            type="password"
            className="FormFields"
            onChange={this.handleChange("password")}
          />
          <button className="SessionButton" onClick={e => this.handleSubmit(e)}>
            {this.props.formType}
          </button>
        </div>
      </form>
    );
  }
}

export default SessionForm;

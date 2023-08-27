import React from "react";
const initialState = {
  email: "",
  name: "",
  password: "",
  emailError: "",
  nameError: "",
  passwordError: "",
};

export default class ValidationForm extends React.Component {
  state = initialState;

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validate = () => {
    let emailError = "";
    let nameError = "";
    let passwordError = "";

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (!this.state.name) {
      nameError = "name is mandatory";
    }

    if (!this.state.password) {
      passwordError = "password is mandatory";
    }

    // empty string = false
    if (emailError || nameError) {
      this.setState({
        emailError,
        nameError,
        passwordError,
      });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);

      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form>
        <div>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            placeholder="Email Address"
            value={this.state.email}
          />
          <div style={{ color: "red", fontSize: 12 }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            placeholder="Name"
            value={this.state.name}
          />
          <div style={{ color: "red", fontSize: 12 }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="Password"
            value={this.state.password}
          />
          <div style={{ color: "red", fontSize: 12 }}>
            {this.state.passwordError}
          </div>
        </div>
        <input type="submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

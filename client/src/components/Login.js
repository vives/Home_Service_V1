import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  NavLink,
  Alert,
  Label,
  FormText
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "./../actions/authActions";
import { clearErrors } from "./../actions/errorActions";

class Login extends Component {
  state = {
    modal: false,
    email: "",
    password: "",
    msg: null
  };

  static ProprTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(preProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== preProps.error) {
      //Check for regiser error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    //If authenticated, close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
    if (isAuthenticated) {
      this.props.history.push("/");
    }
  }

  toggle = () => {
    //Clear Errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password
    };
    //  console.log(user)
    //Attempt to login
    this.props.login(user);
  };
  render() {
    return (
      <div className="container" style={{ width: "40%", height: "100%" }}>
        <h2 style={{ padding: "0px 0px" }}>Login</h2>
        {this.state.msg ? (
          <div className="alert alert-primary" role="alert">
            {this.state.msg}
          </div>
        ) : null}
        <form className="top" onSubmit={this.onSubmit}>
          <div className="container">
            <div className="row">
              <div className="col">
                <label htmlFor="email" style={{ margin: "8px 50px" }}>
                  <b>EMAIL ADDRESS</b>
                </label>
              </div>
              <div class="col">
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="psw" style={{ margin: "8px 50px" }}>
                  <b>PASSWORD</b>
                </label>
              </div>
              <div className="col">
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onChange}
                />
              </div>
              <div className="row">
                <div className="col">
                  <label style={{ margin: "8px 60px" }}>
                    <input
                      type="checkbox"
                      defaultChecked="checked"
                      name="remember"
                    />{" "}
                    Remember me
                  </label>
                  <label style={{ margin: "8px 55px" }}>
                    Forgot <a href="#">password?</a>
                  </label>
                </div>
              </div>
            </div>
            <Button
              color="dark"
              style={{ margin: "8px 55px", width: "30%" }}
              block
            >
              {" "}
              Login
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});
export default connect(
  mapStateToProps,
  { login, clearErrors }
)(Login);

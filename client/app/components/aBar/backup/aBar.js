/*
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppBar from 'material-ui/AppBar';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import RegisterPopup from "./RegisterBusiness";

class aBar extends Component {

  constructor(props) {
     super(props);
      //React function component receives first arg, the PROPs object
      //Allows us to make component reusable.
   }

  render() {
    return (
      <div className="aBar">
        <header className="App-header">
          <AppBar
            showMenuIconButton={false}
            title={<span>ModularPOS</span>}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          />
        </header>
      </div>
    );
  }
};

class LoginPopup extends Component {

  constructor(props) {
     super(props);
   }
  state = {
      open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <div>
          <RaisedButton
            label="Login"
            primary={true}
            onClick={this.handleOpen}
          />
        </div>

        <Dialog
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >


          <div className={"LoginCard"}>
            <div
              className={"LoginCardHeader"}
              actAsExpander={true}
              showExpandableButton={false}
            >
              Sign In To Your POS Account
            </div>

            <div>
              <TextField
                floatingLabelText="Email"
                floatingLabelFixed={false}
              /><br />

              <TextField
                type={"password"}
                floatingLabelText="Password"
                floatingLabelFixed={false}
              /><br /><br />

              <RaisedButton label="Sign In" primary={true} />
            </div>

            <div className={"LoginCardFooter"}>

              <br /><br />
              Dont have an account? Register now!
              <br /><br />
              <RegisterBusinessButton />
              <br />
              <RegisterEmployeeButton />
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}


class RegisterBusinessButton extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true })
  };

  handleClose = () => {
    this.setState({ open: false })
  };
  render() {
    return (
      <div>
        <div>
          <Link to="/RegisterBusiness">
            <RaisedButton
              label="Register Business"
              onClick = {this.handleOpen}
            />
          </Link>
        </div>
        <div>
          <Route path="/RegisterBusiness" component={RegisterPopup} />
        </div>
      </div>
    );
  }
}


class RegisterEmployeeButton extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true })
  };

  handleClose = () => {
    this.setState({ open: false })
  };
  render() {
    return (
      <div>
        <div>
          <Link to="/RegisterEmployee">
            <RaisedButton
              label="Register Employee"
              onClick = {this.handleOpen}
            />
          </Link>
        </div>
        <div>
          <Route path="/RegisterEmployee" component={EmployeePopup} />
        </div>
      </div>
    );
  }
}
// ================================================


export default aBar;
*/

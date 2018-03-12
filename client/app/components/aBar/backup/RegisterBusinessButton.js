/*
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import RaisedButton from 'material-ui/RaisedButton';
import RegisterPopup from "./RegisterBusiness";

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
    )
  }
}

export default RegisterBusinessButton;
*/

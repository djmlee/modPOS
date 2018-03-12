import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, BrowserRouter } from "react-router-dom";

import EmployeePopup from './RegisterEmployee';

export default class RegisterEmployeeButton extends React.Component {
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
          {/* Perhaps make this a nested-Dialogue */}
          <Route path="/RegisterEmployee" component={EmployeePopup} />
        </div>
      </div>
    );
  }
}
// ================================================

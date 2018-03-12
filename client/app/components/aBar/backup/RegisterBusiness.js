/*
import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import LoginPopup from './aBar';


class RegisterPopup extends Component {

  state = {
    open: true,
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
        <RaisedButton
              label="Register Business"
              onClick = {this.handleOpen}
            />
        <RaisedButton label="Scrollable Dialog" onClick={this.handleOpen} />
        <Dialog
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >


          <div className={"LoginCard"}>
            <div
              className={"LoginCardHeader"}
              actAsExpander={true}
              showExpandableButton={false}
            >
              Register Your Business
            </div>

            <div>
              <TextField
                floatingLabelText="First Name"
                floatingLabelFixed={false}
              /><br />

              <TextField
                floatingLabelText="Last Name"
                floatingLabelFixed={false}
              /><br />

              <TextField
                floatingLabelText="Legal Business Name"
                floatingLabelFixed={false}
              /><br />

              <TextField
                floatingLabelText="Legal Business Email"
                floatingLabelFixed={false}
              /><br />

              <TextField
                type={"password"}
                floatingLabelText="Password"
                floatingLabelFixed={false}
              /><br />

              <TextField
                type={"password"}
                floatingLabelText="Confirm Password"
                floatingLabelFixed={false}
              /><br />

              <RaisedButton label="Register" primary={true} />
            </div>


            <div className={"LoginCardFooter"}>
              <br />
              <Link to="../App">
                <RaisedButton
                  label="Back"
                  onClick={this.handleClose} />
              </Link>
            </div>


          </div>
        </Dialog>
      </div>
    )
  }
}

*/

/* put on line 94-95
<div>
  <Route path="/App.js" component={LoginPopup} />
</div>
*/

//export default RegisterPopup;

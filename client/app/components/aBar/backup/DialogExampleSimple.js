import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import RegisterEmployeeButton from './RegisterEmployeeButton';
/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
var buttonStyle = {
  paddingTop: '5px',
  textAlign: 'center',
  color: '#ffffff'
};

export default class DialogExampleSimple extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];
    //The actions in this window were passed in as an array of React objects.

    return (
      <div>
        <FlatButton
          label="Login"
          onClick={this.handleOpen}
          style={buttonStyle}
           />
        <Dialog
          title="Login Card"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <p>Welcome to ModularPOS</p>
          <div className={"LoginCard"}>
              <TextField
                floatingLabelText="Email"
                floatingLabelFixed={false}
              /> <br />
              <TextField
                type={"password"}
                floatingLabelText="Password"
                floatingLabelFixed={false}
              /> <br />
              <br /> <br />
              <RaisedButton label="Sign In" primary={true} />
            </div>


            <div className={"LoginCardFootter"}>
              <br /><br />
              Dont have an account? Register now!
            </div>

            <RegisterEmployeeButton />
        </Dialog> {/* End of Dialog */}
      </div>
    );
  }
}
/*       <div>
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

            <div className={"LoginCardFootter"}>

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
      */

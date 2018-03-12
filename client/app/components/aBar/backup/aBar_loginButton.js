//inactive file currently
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class aBar_loginButton extends Component{
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
          alert("i am inside abar_loginButton");
          <RaisedButton label="Dingo" />
        </div>
      );
    }
  //render_end
}


export default aBar_loginButton;

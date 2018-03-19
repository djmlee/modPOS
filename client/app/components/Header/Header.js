import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

//import Dialog from 'material-ui/Dialog';
//import TextField from 'material-ui/TextField';
import DialogExampleSimple from "../aBar/backup/DialogExampleSimple";
import aBar_loginButton from "../aBar/backup/aBar_loginButton";
import Clock from '../clock/clock';
//import RegisterPopup from "../aBar/aBar";
//import loginPopUp from "../aBar/loginPopUp";
/*
  iconElementLeft={<IconButton><NavigationClose /></IconButton>}
  iconElementRight={<LoginPopUp />}
*/

var styles = {
  //Style for the navBar title text
  fontFamily:'Sweet Hipster',
  fontSize:'xx-large',
	color:'white',
  textAlign:'center'
};

//iconElementLeft={<IconButton><NavigationClose /></IconButton>}
const Header = () => (
  <header>
    <AppBar showMenuIconButton={true}
            style={{
              margin: '0 auto',
              border: '1px solid #ffffff',
              backgroundColor: '#313131',
            }}
            title={<div style={styles}><span>(serve+)</span></div>}
            iconElementLeft={<Clock />}
            iconElementRight={<DialogExampleSimple />}
            />


  </header>
);
/* old code for Header
    <Link to="/">Home</Link>

    <nav>
      <Link to="/helloworld">Hello World</Link>
    </nav>

    <hr />
*/
export default Header;

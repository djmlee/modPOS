import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Home from './components/Home/Home';
import HelloWorld from './components/HelloWorld/HelloWorld';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';

import './styles/styles.scss';

//injectTapEventPlugin();

//To add another page
//example: <Route path="/helloworld2" component={HelloWorld2}/>
//Don't add comments in the render() section! It will break rendering your components
/*
class Help extends Component {
  render() {
    return (
      <div>
        <RaisedButton label="Help"/>
      </div>
    );
  }
}*/
//ReactDOM.render(<Help />, null);

/*
<Router>
  <App>
    <Switch>
      <Route exact path="/"     component={Home}/>
      <Route path="/helloworld" component={HelloWorld}/>
      <Route component={NotFound}/>
    </Switch>
  </App>
</Router>
*/
render((
<MuiThemeProvider muiTheme={getMuiTheme()}>
<Router>
{/* <button>Commented out button. This is how you escape into JS inside JSX</button>*/}
  <App>
    <Switch>
      <Route exact path="/"     component={Home}/>
      <Route path="/helloworld" component={HelloWorld}/>
      <Route component={NotFound}/>
    </Switch>
  </App>
</Router>
</MuiThemeProvider>
), document.getElementById('app'));
//'app' refers to index.html's div id

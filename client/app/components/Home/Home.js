import React, { Component } from 'react';
import 'whatwg-fetch';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

//Home Menu customized imports
import receiptCard from '../receiptCard/receiptCard';
import ListExampleChat from '../receiptCard/ListExampleChat';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import TabsExampleSimple from '../menuOptions/menuOptions';
//Fetch() takes one mandatory arg - path to resource to fetch
//returns a Promise that resolves to a Response
//Also optionally pass an init option as 2nd arg
//Once Response retrieved - # of methods available to define what the body content is & how it should be handled
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
//https://github.com/github/fetch
//axios alternative. Fetch is more verbose and unforgiving https://medium.com/@shahata/why-i-wont-be-using-fetch-api-in-my-apps-6900e6c6fe78rf

var receiptCard_styles = {
  textAlign: 'center'
};
var receiptCard_itemStyles = {
   border: '1px solid black',
   textAlign: 'left'
};
var receiptCard_priceStyles = {
   border: '1px solid black',
   textAlign: 'right'
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: []
    };

    this.newCounter = this.newCounter.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.deleteCounter = this.deleteCounter.bind(this);

    this._modifyCounter = this._modifyCounter.bind(this);
  }

  render() {
    return (
      <div>
        <receiptCard />
        {/* ^ that line dont work for now so we using inline here. To be compartmentalized... */}
        <Card >
           <CardHeader
            style={receiptCard_styles}
            title="Receipt Card"
            subtitle="Expand to see list of items on receipt"
            actAsExpander={true}
            showExpandableButton={true}
          />

          <CardActions style={receiptCard_styles}>
            {/* These are dummy buttons, back end needs hookup */}
            <FlatButton label="Delete" />
            <FlatButton label="Repeat" />
            <FlatButton label="Split" />
            <RefreshIndicator
              percentage={100}
              size={30}
              left={20}
              top={10}
              color="red" // Overridden by percentage={100}
              status="ready"
            />
          </CardActions>
          <CardText expandable={true}>
        {/* Manual listing of items. To be worked on when DB is hooked up*/}
        <div>
          <div style={receiptCard_itemStyles}>
            <table>
                <tr>
                  <td> Shrimp Scampi </td>
                  <td> $12 </td>
                </tr>
                <tr>
                  <td>Linguine Fettucine</td>
                  <td>$10 </td>
                </tr>
                <tr>
                  <td>Bullpenis</td>
                  <td>$1337</td>
                </tr>
                <tr>
                  <td>Maggot Omelette</td>
                  <td>$69</td>
                </tr>

              <tr></tr> {/*blank for spacing*/}
              <tr></tr><tr></tr><tr></tr>
              <tr></tr><tr></tr><tr></tr>
              <tr>
                <td>Tax: </td>
                <td>$t00much</td>
              </tr>
              <tr>
                <td>Subtotal:</td>
                <td>$bourgeoisprice</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>$wallet=empty</td>
              </tr>
              </table>
          </div>
        </div>
          </CardText>
        </Card>

        <TabsExampleSimple />
        <ListExampleChat />

        <ul>

          { this.state.counters.map((counter, i) => (
            <li key={i}>
              <span>{counter.count} </span>
              <button onClick={() => this.incrementCounter(i)}>+</button>
              <button onClick={() => this.decrementCounter(i)}>-</button>
              <button onClick={() => this.deleteCounter(i)}>x</button>
            </li>
          )) }
        </ul>
        <button onClick={this.newCounter}>New counter</button>
      </div>
    );
  }

  componentDidMount() {
    fetch('/api/counters')
      .then(res => res.json())
      .then(json => {
        this.setState({
          counters: json
        });
      });
  }

  newCounter() {
    fetch('/api/counters', { method: 'POST' })
      .then(res => res.json())
      .then(json => {
        let data = this.state.counters;
        data.push(json);

        this.setState({
          counters: data
        });
      });
  }

  incrementCounter(index) {
    const id = this.state.counters[index]._id;

    fetch(`/api/counters/${id}/increment`, { method: 'PUT' })
      .then(res => res.json())
      .then(json => {
        this._modifyCounter(index, json);
      });
  }

  decrementCounter(index) {
    const id = this.state.counters[index]._id;

    fetch(`/api/counters/${id}/decrement`, { method: 'PUT' })
      .then(res => res.json())
      .then(json => {
        this._modifyCounter(index, json);
      });
  }

  deleteCounter(index) {
    const id = this.state.counters[index]._id;

    fetch(`/api/counters/${id}`, { method: 'DELETE' })
      .then(_ => {
        this._modifyCounter(index, null);
      });
  }

  _modifyCounter(index, data) {
    let prevData = this.state.counters;

    if (data) {
      prevData[index] = data;
    } else {
      prevData.sptrce(index, 1);
    }

    this.setState({
      counters: prevData
    });
  }

}

export default Home;

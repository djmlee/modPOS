import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
const menuBar_styles = {
    margin: '0 auto',
    border: '1px solid #ffffff',
    backgroundColor: '#313131'
}

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const TabsExampleSimple = () => (
  <Tabs >
    <Tab label="Appetizers" style={menuBar_styles} >
      <div style={{paddingLeft: '10px'}}>
        <h2 style={styles.headline}>Galici Famous Riceballs</h2>
        <p>
          <RaisedButton label="Basil Pesto Riceball"/>
          <RaisedButton label="Three Cheeses Riceball"/>
        </p>
        <p>
          <h2 style={styles.headline}>Good Ital-Eats</h2>
        </p>
        <p>
          <RaisedButton label="Garlic Knots"/>
          <RaisedButton label="Caesar's Salad"/>
          <RaisedButton label="Breadsticks"/>
        </p>
        <Slider name="slider0" defaultValue={0.5} />
      </div>
    </Tab>
    <Tab label="Main Course" style={menuBar_styles} >
      <div>
        <div style={{paddingLeft: '10px'}}>
          <h2 style={styles.headline}>"Mama's Specials"</h2>
          <p>
            <RaisedButton label="Spicy Cajun Chicken Alfredo"/>
            <RaisedButton label="Shrimp Scampi"/>
            <RaisedButton label="Baked Mussels over Squid Ink Pasta"/>
          </p>
          <p>
            <h2 style={styles.headline}>"Daddy's Specials"</h2>
          </p>
          <p>
            <RaisedButton label="Bullpenis"/>
            <RaisedButton label="Toss Your Own Caesar's Salad"/>
            <RaisedButton label="Breadsdicks"/>
          </p>
          </div>
      </div>
    </Tab>
    <Tab
      label="onActive "
      style={menuBar_styles}
      data-route="/home"
      onActive={handleActive}
    >
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
);

export default TabsExampleSimple;

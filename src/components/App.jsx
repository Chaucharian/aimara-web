import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Galery from './Galery.jsx';
import items from '../model/items.js';
import Header from './Header';

class App extends Component {

  constructor(...args) {
    super(...args);
    this.state = { items: items };
    this.changeHandler = value => this.updateState(value);
  }

  updateState(value) {
    if(value === '') {
      this.setState({items: items });
    } else {
      const filteredItems = items.filter(item => value === item.title);
      this.setState({items: filteredItems });
    }
  }

  render() {
    const { items } = this.state;
    return(   
      <CssBaseline>
        <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center">
          <Header onChange={this.changeHandler}/>
          <Galery images={ items } />
        </Grid>
      </CssBaseline>
    );
  }
}

export default App;
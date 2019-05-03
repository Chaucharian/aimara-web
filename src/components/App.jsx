import React, { Component } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Galery from './Galery.jsx';
import items from '../model/items.js';
import Header from './Header';
import { FETCH_ALL_IMAGES } from '../actions/types';

class App extends Component {

  constructor(...args) {
    super(...args);
  }
/*
  updateState(value) {
    if(value === '') {
      this.setState({items: items });
    } else {
      const filteredItems = items.filter(item => value === item.title);
      this.setState({items: filteredItems });
    }
  }*/

  render() {
    return(   
      <CssBaseline>
        <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center">
          <Header />
          <Galery images={items} />
        </Grid>
      </CssBaseline>
    );
  }
}

const mapStateToProps = state => {
  return { 
    items: state.items
   };
}

const mapDispatchToProps = dispatch => {
  return {
    loadAllImages: () => dispatch(FETCH_ALL_IMAGES),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

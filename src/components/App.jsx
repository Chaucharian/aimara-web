import React, { Component } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import ItemGalery from './ItemGalery';
import Header from './Header';
import { FETCH_ALL_IMAGES } from '../actions/types';

class App extends Component {

  constructor(...args) {
    super(...args);
  }

  componentDidMount() {
    this.props.loadAllImages();
  }

  render() {
    const { items } = this.props;
    return(   
      <CssBaseline>
        <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center">
          <Header />
          <ItemGalery items={items} />
        </Grid>
      </CssBaseline>
    );
  }
}

const mapStateToProps = state => {
  return state.app
}

const mapDispatchToProps = dispatch => {
  return {
    loadAllImages: () => dispatch({ type: FETCH_ALL_IMAGES }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

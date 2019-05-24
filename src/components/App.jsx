import React, { Component } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import LinearProgressBar from "./LinearProgressBar";
import ItemGalery from './ItemGalery';
import { FETCH_ITEMS } from '../actions/types';
import Order from './Order';

const styles = () => ({
  linearPercentage: {
    height: '4px'
  }
});
class App extends Component {

  constructor(...args) {
    super(...args);
  }

  componentDidMount() {
    this.props.loadAllImages();
  }

  render() {
    const { items, isFetching, currentView, classes } = this.props;

      return(   
        <CssBaseline>
          <Grid 
          container
          direction="column"
          justify="center"
          alignItems="center">
            <Header />
            { isFetching ? <LinearProgressBar /> : <div className={classes.linearPercentage}></div> }
            { currentView === 'list' ? <ItemGalery items={items} /> : <Order /> }
        </Grid>
        </CssBaseline>
      );
  }
}

const mapStateToProps = state => {
  return {
    currentView: state.app.currentView,
    items: state.app.items,
    isFetching: state.app.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadAllImages: () => dispatch({ type: FETCH_ITEMS }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));

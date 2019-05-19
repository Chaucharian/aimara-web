import React, { Component } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import LinearProgressBar from "./LinearProgressBar";
import ItemGalery from './ItemGalery';
import { FETCH_ALL_IMAGES } from '../actions/types';

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

    if(currentView === 'list') {
      return(   
        <CssBaseline>
          <Grid 
          container
          direction="column"
          justify="center"
          alignItems="center">
            <Header />
            { isFetching ? <LinearProgressBar /> : <div className={classes.linearPercentage}></div> }
            <ItemGalery items={items} />
          </Grid>
        </CssBaseline>
      );
    } else {
      return(   
        <CssBaseline>
          <Grid 
          container
          direction="column"
          justify="center"
          alignItems="center">
            <Header />
            { isFetching ? <LinearProgressBar /> : <div className={classes.linearPercentage}></div> }
EAA
        </Grid>
        </CssBaseline>
      );
    }
    
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
    loadAllImages: () => dispatch({ type: FETCH_ALL_IMAGES }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));

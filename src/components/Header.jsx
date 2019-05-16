import React, { Component } from "react";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import SearchField from "./SearchField";
import SlideGalery from "./SlideGalery";
import * as actionType from '../actions/search';
import { SEARCH_CRITERIA } from "../actions/types";

class Header extends Component {

    constructor(...args) {
        super(...args);
        this.searchFieldChageHandle = value => this.props.search(value);
    }

    render() {
        const { classes } = this.props;

        return(
        <div className={classes.root}>
            <SearchField onChange={this.searchFieldChageHandle} />
            <SlideGalery />
        </div>);
    }

};

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 200,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    }
});

const mapStateToProps = state => {
    return { 
       ... state.app
     };
  }
  
const mapDispatchToProps = dispatch => {
    return {
        search: criteria => dispatch(actionType.search(criteria)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));

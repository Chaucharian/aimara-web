import React, { Component } from "react";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import SearchField from "./SearchField";
import SlideGalery from "./SlideGalery";
import * as actionType from '../actions/search';
import imagee from '../images/aimara_nueces.jpg';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        width: '100%',
        background: `url(${imagee}) no-repeat`,
        //backgroundColor: theme.palette.background.paper,
    },
    progressBar: {

    }
});

class Header extends Component {

    constructor(...args) {
        super(...args);
        this.searchFieldChagenHandle = action => this.props.search(action);
    }

    render() {
        const { classes } = this.props;

        return(
        <div className={classes.root}>
            <SearchField onSearch={this.searchFieldChagenHandle} />
            <SlideGalery />
        </div>);
    }

};
  
const mapDispatchToProps = dispatch => {
    return {
        search: action => dispatch(action),
    }
  }

export default connect(null, mapDispatchToProps)(withStyles(styles)(Header));

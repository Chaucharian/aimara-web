import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import SearchField from "./SearchField";
import SlideGalery from "./SlideGalery";

const Header = (props) => {
    const { classes } = props;

    return(
        <div className={classes.root}>
            <SearchField />
            <SlideGalery />
        </div>);
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

export default withStyles(styles)(Header);

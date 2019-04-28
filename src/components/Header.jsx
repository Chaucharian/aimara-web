import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import SearchField from "./SearchField";
import SlideGalery from "./SlideGalery";

class Header extends Component {

    constructor() {
        super();
        this.typing = value => this.props.onChange(value);
    }

    render() {
        const { classes } = this.props;

        return(
        <div className={classes.root}>
            <SearchField onChange={this.typing} />
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

export default withStyles(styles)(Header);

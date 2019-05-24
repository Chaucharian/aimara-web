import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';

const style = () => ({
    root: {
        fontFamily: 'Roboto',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    } 
});

class ToggleList extends Component {
    constructor(...args) {
        super(...args);
        this.state = { open: true };
        //this.clickHandler = action => this.props.onItemClick(action);
    }

    componentWillReceiveProps() {
        const { children } = this.props.children;
        console.log(children);
    }

    render() {
        const { classes } = this.props;
        const { children } = this.props.children;

        return( 
           <div className={classes.root} >
           </div>
        );
    }
}


export default withStyles(style)(ToggleList);
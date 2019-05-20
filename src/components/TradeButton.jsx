import Zoom from '@material-ui/core/Zoom';
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import ViewModule from '@material-ui/icons/ViewModule';
import { changeView } from '../actions/viewButton';

const styles = theme => ({
    root: {
        position: 'fixed',
        top: '20%',
        left: '90%',
        zIndex: '10',
        fontFamily: 'Arial'
    },
    number: {
        transition: 'color 500ms ease-out',
        color: '#ffffff00'
    },
    showNumber: {
        color: '#5f9ed0'
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
    change: {
        backgroundColor: '#b38dd0'
    }
});

class TradeButton extends Component {

    constructor(...args) {
        super(...args);
        this.state = { value: 0 }
        this.clickHandler = action => this.props.click(action);
    }

    handleChange(value) {
        if(value === 1) {
            this.setState({ value: 0 });    
            this.clickHandler(changeView('list'));
        } else {
            this.setState({ value: 1 });  
           this.clickHandler(changeView('form'));  
        }
    }
    
    render() {
        const { classes, theme } = this.props;
        const {  userActionValue, userPicking } = this.props.transitionData;
        const transitionDuration = {
          enter: theme.transitions.duration.enteringScreen,
          exit: theme.transitions.duration.leavingScreen,
        };
        const buttons = [
            {
              color: 'primary',
              className: classes.fab,
              icon: <ShoppingCart />,
            },
            {
              color: 'secondary',
              className: classes.fab,
              icon: <ViewModule />,
            }
          ];
        return (
            <div className={classes.root}>
            <b className={userPicking ? classes.showNumber : classes.number }>{userActionValue}</b>
            { buttons.map( (fab, index) => (
                <Zoom
                  key={fab.color}
                  in={this.state.value === index}
                  timeout={transitionDuration}
                  style={{
                    transitionDelay: `${this.state.value === index ? transitionDuration.exit : 0}ms`,
                    transition: 'background-color 500ms ease-out'
                  }}
                  unmountOnExit>
                  <Fab className={fab.className} color={fab.color} onClick={ () => this.handleChange(this.state.value) }>
                    {fab.icon}
                  </Fab>
                </Zoom>
            ))}
            </div>);
    }
    
}

export default withStyles(styles, { withTheme: true })(TradeButton);
import Zoom from '@material-ui/core/Zoom';
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import ViewModule from '@material-ui/icons/ViewModule';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import green from '@material-ui/core/colors/green';
import { SET_ITEM_LIST_VIEW, SET_FORM_VIEW } from '../actions/types';
import { changeView } from '../actions/viewButton';


const styles = theme => ({
    root: {
      position: 'relative',
      top: '10%',
      left: '40%'
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2,
    },
    fabGreen: {
      color: theme.palette.common.white,
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[600],
      },
    },
  });

class TradeButton extends Component {

    constructor(...args) {
        super(...args);
        this.state = { value: 1 }
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
            { buttons.map( (fab, index) => (
                <Zoom
                  key={fab.color}
                  in={this.state.value === index}
                  timeout={transitionDuration}
                  style={{
                    transitionDelay: `${this.state.value === index ? transitionDuration.exit : 0}ms`,
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
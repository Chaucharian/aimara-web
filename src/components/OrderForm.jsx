import React, { Component } from "react";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import { GET_ORDER_LIST } from "../actions/types";
import OrderList from "./OrderList";

const style = () => ({
    root: {
        fontFamily: 'Roboto',
        width: '100%',
        textAlign: 'center'
    }
});

class OrderForm extends Component {
    constructor(...args) {
        super(...args);

        this.getOrderList = () => this.props.getOrderList();
        this.clickHandler = action => this.props.onItemClick(action);
    }

    render() {
        const { orderList, classes } = this.props;

        return( 
           <div className={classes.root} >
               <OrderList list={orderList} onItemClick={this.clickHandler} />
           </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orderList: state.app.orderList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOrderList: dispatch({ type: GET_ORDER_LIST }),
        onItemClick: action => dispatch(action)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(OrderForm));
import React, { Component } from "react";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { GET_ORDER_LIST } from "../actions/types";

const style = () => ({});

class OrderForm extends Component {
    constructor(...args) {
        super(...args);

        this.getOrderList = () => this.props.getOrderList();
    }

    render() {
        const { orderList } = this.props;

        return( orderList.map( item => <b>titulo {item.title} y {item.amount}</b>) );
    }
}

const mapStateToProps = state => {
    return {
        orderList: state.app.orderList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOrderList: dispatch({ type: GET_ORDER_LIST })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(OrderForm));
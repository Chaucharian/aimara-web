import React, { Component } from "react";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { GET_ORDER_LIST } from "../actions/types";
import OrderList from "./OrderList";
import Form from "./Form";

const style = () => ({
    root: {
        fontFamily: 'Roboto',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    font: {
        fontWeight: 400
    }
});

class Order extends Component {
    constructor(...args) {
        super(...args);

        this.getOrderList = () => this.props.getOrderList();
        this.clickHandler = action => this.props.onItemClick(action);
    }

    render() {
        const { orderList, classes } = this.props;

        return( 
           <div className={classes.root} >
                <h3 className={classes.font}>Tus productos</h3>
                <OrderList list={orderList} onItemClick={this.clickHandler} />
                <h3 className={classes.font}>Tus datos</h3>
                <Form />
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(Order));
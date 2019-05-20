import React, { Component } from "react";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const style = () => ({});

class OrderForm extends Component {
    constructor(...args) {
        super(...args);
    }

    render() {

    }
}

const mapStateToProps = state => {
    return {
        orderList: state.app.orderList
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(OrderForm));
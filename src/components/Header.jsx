import React, { Component } from "react";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import SearchField from "./SearchField";
import SlideGalery from "./SlideGalery";
import TradeButton from "./TradeButton";
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
        this.searchFieldChangeHandler = action => this.props.search(action);
        this.changeViewHandler = action => this.props.changeView(action);
    }

    render() {
        const { classes, userPicking, userActionValue } = this.props;

        return(
        <div className={classes.root}>
            <SearchField onSearch={this.searchFieldChangeHandler} />
            <SlideGalery />
            <TradeButton click={this.changeViewHandler} transitionData={ {userPicking, userActionValue} }/>
        </div>);
    }

};

const mapStateToProps = state => {
    return {
        userActionValue: state.app.userActionValue,
        userPicking: state.app.userPicking,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        search: action => dispatch(action),
        changeView: action => dispatch(action),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));

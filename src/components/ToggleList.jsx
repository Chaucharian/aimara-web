import React from "react";
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const style = () => ({
    root: {
        fontFamily: 'Roboto',
        width: '100%',
        textAlign: 'center'
    },
    showList: {
        display: 'block'
    },
    hideList: {
        display: 'none'
    }
});

const ToggleList = props => {
    const { children, classes } = props;

    return (
        <ExpansionPanel className={classes.root}>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <h3>Tus productos</h3>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            { children }
        </ExpansionPanelDetails>
        </ExpansionPanel>
    ); 
}

export default withStyles(style)(ToggleList);
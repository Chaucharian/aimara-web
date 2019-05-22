import React from "react";
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import { deleteItem } from '../actions/items';

const style = () => ({
    root: {
        width: '100%',
    },
    font: {
        fontWeight: 100
    }
});

const OrderList = props => { 
    const { list, classes, onItemClick } = props;

    return( 
        <List component="nav" className={classes.root}>
        { 
        list.length <= 0 ? <h3 className={classes.font}>Aun no cargaste ningun alimento :(</h3> : 
            list.map( item => {
                return (
                    <ListItem key={item.id} button>
                    <ListItemText primary={item.title} secondary={`Cantidad: ${item.amount}`} />
                    <IconButton aria-label="Delete" color='secondary' onClick={ () => onItemClick(deleteItem(item.id))}>
                        <DeleteIcon fontSize="large" />
                    </IconButton>
                    <Divider />
                    </ListItem>
                ); 
            })
        }
        </List>
    );
}

export default withStyles(style)(OrderList);
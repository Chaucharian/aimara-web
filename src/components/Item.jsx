import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/RemoveCircleOutline';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import { withStyles } from '@material-ui/core/styles';
import { addItem, removeItem } from '../actions/items';

const styles = () => ({
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
        },
        tile: {
            padding: 0+'px!important',
            width: '25%',
            height: 300
        },
        image: {
            height: '100%',
            width: '100%'
        }
});

const Item = props => {
    const { click, src, id, amount, title, classes } = props;

    return (
    <GridListTile className={ classes.tile } >
        <img src={ src } alt={ src } className={ classes.image } />
        <GridListTileBar
        key={id}
        title={ title }
        subtitle={<span>Cantidad: {amount} </span>}
        actionIcon={[
        <IconButton className={classes.icon}  onClick={ () => click(addItem(id)) } >
        <AddIcon />
        </IconButton>, 
        <IconButton className={classes.icon} onClick={ () => click(removeItem(id)) } >
            <RemoveIcon /> 
        </IconButton>
        ]}/>
    </GridListTile>
    );
}

export default withStyles(styles)(Item);
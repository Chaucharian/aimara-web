import React from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { deleteItem } from '../actions/items';

const style = () => ({
    root: {
        display: 'flex',
        itemsAlign: 'center',
        width: '50%',
    },
    textField: {
        width: '100%'
    }
});

const Form = props => { 
    const { list, classes, onItemClick } = props;

    return( 
        <div className={classes.root}>
            <form>
                <TextField
                    id="outlined-email-input"
                    label="Nombre y Apellido"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined" 
                />
                <TextField
                    id="outlined-email-input"
                    label="Email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined" 
                />
                <TextField
                    id="outlined-email-input"
                    label="Celular"
                    className={classes.textField}
                    type="tel"
                    name="email"
                    autoComplete="tel"
                    margin="normal"
                    variant="outlined" 
                />
            </form>
        </div>
    );
}

export default withStyles(style)(Form);
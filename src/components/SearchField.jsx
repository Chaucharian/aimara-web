import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import pinkColor from '@material-ui/core/colors/pink';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { search, searchButton } from '../actions/search';

const styles = () => ({
  root: {
    display: 'flex',
    width: '50%'
  },
  formControl: {
    display: 'block',
    width: '100%'
  },
  input: {
    width: '90%'
  },
  iconButton: {
    padding: 10,
  },
  cssLabel: {
    '&$cssFocused': {
      color: pinkColor[200],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: pinkColor[300],
    },
  }
});

const SearchField = props => {
  const { onSearch, classes } = props;

  return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel
            htmlFor="custom-css-standard-input"
            classes={{
              root: classes.cssLabel,
              focused: classes.cssFocused,}}>
            Busca tu alimento :)
          </InputLabel>
          <Input
            id="inputSearch"
            onChange={ event => onSearch(search(event.target.value)) }
            className={classes.input}
            classes={{
              underline: classes.cssUnderline,
          }}/>
          <IconButton className={classes.iconButton} aria-label="Search">
          <SearchIcon />
          </IconButton>
        </FormControl>
      </div>
    );
}

SearchField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchField);
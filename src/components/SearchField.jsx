import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
  root: {
    display: 'flex'
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  }
};

class SearchField extends Component {

  constructor(...args) {
    super(...args);
    this.state = { value: '' };

    this.changeHandler = event => this.updateState(event.target.value);//{ this.setState({ value: event.target.value }); }
  }

  updateState(value) {
    const { onChange } = this.props;
    onChange(value);
    this.setState({value});
  }


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
          <InputBase className={classes.input} value={this.state.value} onChange={this.changeHandler} placeholder="Busca tu alimento ideal :)" />
          <IconButton className={classes.iconButton} aria-label="Search">
              <SearchIcon />
          </IconButton>
      </div>
    );
  }
  
}

SearchField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchField);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
    width: '100%'
  },
};

function LinearProgressBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinearProgress variant="query" />
    </div>
  );
}

LinearProgressBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearProgressBar);
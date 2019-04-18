import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: window.width,
    height: window.height,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
	},
	image: {
		padding: 0+'px!important',
	}
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     src: image,
 *     title: 'Image',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function Galery(props) {
	const { classes, images } = props;
	let key = 0;

  return (
    <div className={ classes.root }>
      <GridList cellHeight={180} cols={3} className={classes.gridList}>
        { images.map( image => (
          <GridListTile key={ key++ } className={ classes.image } >
            <img src={ image.src } alt={ image.src } />
            <GridListTileBar
              title={ image.title }
              subtitle={<span>by: YO </span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Galery.propTypes = {
  classes: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
};

export default withStyles(styles)(Galery);

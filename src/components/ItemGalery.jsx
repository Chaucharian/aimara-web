import React,{ Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Item from './Item';

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: window.width,
    height: window.height,
    flexGrow: '3'
  }
});

class ItemGalery extends Component {
  constructor(...args) {
    super(...args);

    this.clickHandler = action => this.props.onItemClick(action);
  } 

  render() {
    const { classes, items } = this.props;
    
    return (
      <div className={ classes.root }>
        <GridList cellHeight={180} cols={3} className={classes.gridList}>
          { items.map( item => {
            return ( <Item key={item.id} id={item.id} title={item.title} src={item.src} amount={item.amount} click={this.clickHandler} /> );
          })}
        </GridList>
      </div>
    );
  }
	
}

ItemGalery.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
};
/*
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}
*/
const mapDispatchToProps = dispatch => {
  return {
    onItemClick: action => dispatch(action)
  }
}


export default connect(null,mapDispatchToProps)(withStyles(styles)(ItemGalery));

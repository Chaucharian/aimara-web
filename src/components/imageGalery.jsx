import { GridList, GridListTile } from '@material-ui/core';
import image from '../images/test.jpeg';

const style = () => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: '#f3f',
    },
    gridList: {
      width: 500,
      height: 450,
    },
});

const imageGalery = images => (
<div className={style.root}>
    <GridList cellHeight={160} className={style.gridList} cols={3}>
    { images.map( image => (
        <GridListTile key={ image.name } cols={image.cols || 1}>
        <img src={image.src} alt={image.title} />
        </GridListTile>
    )) }
    </GridList> 
</div>);

export default imageGalery;
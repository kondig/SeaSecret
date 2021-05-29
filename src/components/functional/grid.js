import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Box from '@material-ui/core/Box';

//gallery images
import g1 from '../../img/g1.jpg';
import g2 from '../../img/g2.jpg';
import g3 from '../../img/g3.jpg';
import g4 from '../../img/g4.jpg';
import g5 from '../../img/g5.jpg';
import g6 from '../../img/g6.jpg';
import g7 from '../../img/g7.jpg';
import g8 from '../../img/g8.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#ffffff',   
  },
  gridList: {
    width: '100%',
    overflow: 'hidden',
  },
  img: {
    height: 400,
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const tileData = [
  { img: g1, title: 'Sea Secret boat trips', cols: 1 },
  { img: g2, title: 'Sea Secret boat trips', cols: 1 },
  { img: g3, title: 'Sea Secret boat trips', cols: 1 },
  { img: g4, title: 'Sea Secret boat trips', cols: 1 },
  { img: g5, title: 'Sea Secret boat trips', cols: 1 },
  { img: g6, title: 'Sea Secret boat trips', cols: 1 },
  { img: g7, title: 'Sea Secret boat trips', cols: 1 },
  { img: g8, title: 'Sea Secret boat trips', cols: 1 },
]

export default function ImageGridList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box display={{ xs: 'block', md: 'none', lg: 'none', xl: 'none' }}>
        <GridList cellHeight={300} className={classes.gridList} cols={1}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} className={classes.img} />
            </GridListTile>
          ))}
        </GridList>
      </Box>
      <Box display={{ xs: 'none', md: 'block', lg: 'block', xl: 'block' }}>
        <GridList cellHeight={400} className={classes.gridList} cols={4}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} className={classes.img} />
            </GridListTile>
          ))}
        </GridList>
      </Box>
    </div>
  );
}

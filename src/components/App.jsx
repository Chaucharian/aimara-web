import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Galery from './Galery.jsx';
import image from '../images/cannabis.jpg';

const imagesData = [
    {
    	src: image,
    	title: 'Esto',
    },
    {
      src: image,
      title: 'Es',
    },
    {
			src: image,
    	title: 'Queso',
    },
    {
    	src: image,
    	title: 'Ke',
		},
		{
    	src: image,
    	title: 'Esto',
    },
    {
      src: image,
      title: 'Es',
    },
    {
			src: image,
    	title: 'Queso',
    },
    {
    	src: image,
    	title: 'Ke',
    }
];

const App = () => (
    <CssBaseline>
			<Grid container
			direction="column"
			justify="center"
			alignItems="center">
				<Galery images={ imagesData } />
			</Grid>
    </CssBaseline>
);

export default App;

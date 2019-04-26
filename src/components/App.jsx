import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Galery from './Galery.jsx';
import items from '../model/items.js';
import Header from './Header';

const App = () => (
    <CssBaseline>
      <Grid 
      container
			direction="column"
			justify="center"
			alignItems="center">
        <Header />
        <Galery images={ items } />
			</Grid>
    </CssBaseline>
);

export default App;
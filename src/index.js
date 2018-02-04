import React from 'react';
import { render } from 'react-dom';
import Powerfour from './Powerfour';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  backgroundColor: 'steelblue',
};



const App = () => (
  <Powerfour style={styles} w={7} h={6} />
);

render(<App />, document.getElementById('root'));

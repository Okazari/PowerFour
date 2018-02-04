import React from 'react';
import { render } from 'react-dom';
import Powerfour from './Powerfour';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  backgroundColor: 'lightgrey',
  minHeight: '100vh',
  width: '100%',
};



const App = () => (
  <div style={styles}>
    <Powerfour  w={7} h={6} />
  </div>
);

render(<App />, document.getElementById('root'));

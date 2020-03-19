import React from 'react';
import SpinnerImg from './spinner.gif';
const Spinner = () => (
  <img
    src={SpinnerImg}
    alt='loading...'
    style={{ width: '200px', margin: 'auto', display: 'block' }}
  />
);

export default Spinner;

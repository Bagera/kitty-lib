import React from 'react';
import ReactDOM from 'react-dom';
import KittyCard from './KittyCard';

it('KittyCard renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<KittyCard />, div);
});

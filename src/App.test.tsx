/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Provider from './Context';

test('renders learn react link', () => {
  render(<Provider><App /></Provider>);
  expect(App).toBeTruthy();
});

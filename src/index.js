import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createRenderer } from 'fela'
import { Provider } from 'react-fela'
import { render } from 'react-dom'

const renderer = createRenderer();

render(
  <Provider renderer={renderer}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

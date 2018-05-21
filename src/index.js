import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './layout/App';
import registerServiceWorker from './registerServiceWorker';

const el = document.getElementById('root')

const render = () => {
  ReactDOM.render(<App />, el);
}

if (module.hot) {
  module.hot.accept('./layout/App.js', () => {
    setTimeout(render)
  })
}

render()


registerServiceWorker();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import  {ThemeProvider} from '@material-ui/styles'
import Theme from './utils/Theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <App/>
      </BrowserRouter>
    </ThemeProvider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

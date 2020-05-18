import React from 'react';
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'
import {Provider} from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
// import NavBar from './components/NavBar';
import { Switch,Route } from 'react-router-dom';
import Routes from './routing/Routes'

function App() {
  return (

        <React.Fragment>
          <Provider store={store}>
            <ReduxToastr
              position="top-center"
              transitionIn='bounceIn'
              transitionOut='bounceOut'
              progressBar
              preventDuplicates
            />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={Routes} />
            </Switch>
          </Provider>
        </React.Fragment>

  );
}

export default App

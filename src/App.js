import React from 'react';
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'
import {Provider} from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import { Switch,Route } from 'react-router-dom';
import Routes from './routing/Routes'
import Login from './auth/Login';
import Register from './auth/Register';
import Alert from './components/Alert'
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { LOGIN_SUCCESS} from './actions/types'
import {logout} from './actions/authAction'
// import PrivateRoute from './routing/PrivateRoute'
// import PageNotFound from './components/PageNotFound';

const accessToken = localStorage.jwt_token
if(accessToken){
  setAuthToken(accessToken)
  const decoded_token = jwt_decode(accessToken)
  store.dispatch({
    type: LOGIN_SUCCESS,
    payload: {decoded_token}
  })

  const currentTime = Date.now()/1000
  if(decoded_token.exp<currentTime){
      store.dispatch(logout())
      window.location.href = "/"
  }
}



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
            <section className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <Alert/>
                </div>
              </div>
            </section>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route component={Routes} />
            </Switch>
          </Provider>
        </React.Fragment>
        

  );
}

export default App

import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import './App.scss';
import { getToken } from './utils/token'
import history from './utils/history'
import Login from './views/Auth/Login'
import Daftar from './views/Auth/Daftar'

const loading = () => <div className="animated fadeIn pt-3 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

class App extends Component {
  render() {
    // console.log(history)
    return (
      <Router history={history}>
        <React.Suspense fallback={loading()}>
          <Switch>
            {/* <Route path="/" name="Home" render={ props =>
                getToken() ? (
                  <DefaultLayout {...props}/>
                ) : (
                  <Login />
                )
              } 
            /> */}
            {/* <Route path="/" name="Home" render={ props =>
                getToken() && (
                  <DefaultLayout {...props}/>
                )
              } 
            /> */}
            {
              getToken() && (
                <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
              )
            }

            {
              !getToken() && (
                <Fragment>
                  <Route exact path="/"> <Login /> </Route>
                  <Route path="/daftar"> <Daftar /> </Route>
                </Fragment>
              )
            }            
          </Switch>
          <Redirect to="/" />
        </React.Suspense>
      </Router>
    );
  }
}

export default App;

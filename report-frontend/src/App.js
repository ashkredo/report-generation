import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, withRouter, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import { initializeApp } from 'redux/reducers/appReducer';
import store from 'redux/helpers/store';
import HomeContainer from 'pages/Home/HomeContainer';
import NotFound from 'pages/NotFound';
import Preloader from 'components/common/Preloader';

const App = (props) => {
  useEffect(() => {
    if (!props.initialized) props.initializeApp();
  });

  if (!props.initialized) {
    return <Preloader />;
  }
    
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/home" />} />
        <Route path="/home" exact render={() => <HomeContainer />} />
        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const ReportApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ToastProvider autoDismiss>
          <AppContainer  />
        </ToastProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default ReportApp;

import React from 'react';
import { connect } from 'react-redux';
import { generateReport } from 'redux/reducers/homeReducer';
import Home from './Home';

const HomeContainer = (props) => {
  return <Home {...props} />;
};

export default connect(null, { generateReport })(HomeContainer);
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import SendCandidates from './SendCandidates';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/send-candidates/" component={SendCandidates} />
  </Router>
), document.getElementById('root'));

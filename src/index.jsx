import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import SendCandidates from './SendCandidates';
import {candidate} from './reducers';


function r(state = {}, action) {
  return {
    candidate: candidate(state.candidate, action),
  };
}

const store = createStore(r);

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/send-candidates/" component={SendCandidates} />
    </Router>
  </Provider>
), document.getElementById('root'));

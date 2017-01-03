import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import CandidateSelect from './CandidateSelect';

// HAVE SOME LINKS TO SET STATE

function App(props) {
  return (
    <div>
      SelectCandidate:
      <br />
      <CandidateSelect candidate={{ name: 'Ciri'}}>
        Ciri
      </CandidateSelect>
      <br />
      <CandidateSelect candidate={{ name: 'Triss' }}>
        Triss
      </CandidateSelect>
      <br />
      <CandidateSelect candidate={{ name: 'Yennefer'}}>
        Yennefer
      </CandidateSelect>
      { props.candidate.name ?
        <div>
          <p>
            Here is the candidate you are going to send:
            <br />
            {props.candidate.name}
          </p>
          <p>
            <Link to="/send-candidates/">Send</Link>
          </p>
        </div>
      : null }
    </div>
  );
}

const mapStatetoProps = state => ({
  candidate: state.candidate,
});

const AppWithStore = connect(mapStatetoProps, null)(App);

export default AppWithStore;

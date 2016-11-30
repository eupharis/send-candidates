import React from 'react';
import { Link } from 'react-router';

function App(props) {
  return (
    <div>
      Hi world! {props.foobar}
      <Link to="/send-candidates/">Send Candidates</Link>
    </div>
  );
}

export default App;

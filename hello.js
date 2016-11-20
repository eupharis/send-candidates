import React from 'react';
import ReactDOM from 'react-dom';

function Sup(props) {
  return <div>What is up {props.name}</div>;
}


class Save extends React.Component {
  render()  {
    return <input type="submit" />
  }
}


class SendCandidatesForm extends React.Component {
  render() {
    return(
      <h1>Send Candidates</h1>
      <form>
        <Sup name='Strider' />
        <Save>
      </form>
    );
  }
}

ReactDOM.render(<SendCandidates/>, document.getElementById('root'));

import React from 'react';

const prom = new Promise((resolve) => {
  setTimeout(resolve, 1000);
});

class Warn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
    prom.then(() => { this.setState({loading: false}); });
  }
  render() {
    return (
      <div>
        { this.state.loading ?
          <h2>Loading...</h2>
        :
          <div>
            <h2>Warning</h2>
            <p>{this.props.sender.name} sent {this.props.candidate.name} to {this.props.job.role} two days ago.</p>
            <p>Are you sure you want to send?</p>
            <button onClick={this.props.next}>Continue</button>
          </div>
        }
      </div>
    );
  }
}

export default Warn;

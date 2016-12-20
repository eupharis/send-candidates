import React from 'react';
import { Link } from 'react-router';
import Form from './Form';
import Success from './Success';
import Warn from './Warn';

class SendCandidates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'warn',
      sender: {name: 'Dan Fellin'},
      candidate: {name: 'Bam Rubble'},
      job: {role: 'XML Specialist', hiringManager: 'Jack Daniel <jack@spacepicnic.com>'},
    };

    this.displayWarn = this.displayWarn.bind(this);
    this.displayForm = this.displayForm.bind(this);
    this.displaySuccess = this.displaySuccess.bind(this);
  }

  displayWarn() { this.setState({display: 'warn'}); }
  displayForm() { this.setState({display: 'form'}); }
  displaySuccess() { this.setState({display: 'success'}); }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>Send Candidates to Hiring Manager</h1>
        { this.state.display === 'warn' ?
          <Warn
            sender={this.state.sender} candidate={this.state.candidate}
            job={this.state.job} next={this.displayForm}
          />
        : null }
        { this.state.display === 'form' ?
          <Form
            candidate={this.state.candidate} job={this.state.job}
            prev={this.displayWarn} next={this.displaySuccess}
          />
        : null }
        { this.state.display === 'success' ?
          <Success
            candidate={this.state.candidate} job={this.state.job}
            prev={this.displayForm}
          />
        : null }
      </div>
    );
  }
}

export default SendCandidates;

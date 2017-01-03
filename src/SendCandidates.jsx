import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Form from './Form';
import Success from './Success';
import Warn from './Warn';

class C extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'warn',
      sender: {name: 'Dan Fellin'},
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
            sender={this.state.sender} candidate={this.props.candidate}
            job={this.state.job} next={this.displayForm}
          />
        : null }
        { this.state.display === 'form' ?
          <Form
            candidate={this.props.candidate} job={this.state.job}
            prev={this.displayWarn} next={this.displaySuccess}
          />
        : null }
        { this.state.display === 'success' ?
          <Success
            candidate={this.props.candidate} job={this.state.job}
            prev={this.displayForm}
          />
        : null }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  candidate: state.candidate,
});

const SendCandidates = connect(mapStateToProps)(C);
export default SendCandidates;

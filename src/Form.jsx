import React from 'react';
import Subject from './Subject';
import To from './To';
import CcList from './CcList';
import Body from './Body';

const sendStyle = {
  textAlign: 'right',
};

function getBodyContent(candidate) {
  const rv = `<firstname>,

Please review the attached candidate.

==============================
${candidate.name}
==============================

Passionate about solving real world problems through technology.

Excited to work with a company that would further his skills.

Current Title: Software Engineer
Current Compensation: $150,000
Skills: Django, DRF, Postgres
`;
  return rv;
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: props.candidate.name,
      body: getBodyContent(props.candidate),
      ccs: ['Billy Wipple <billy@spacepicnic.com>'],
      sending: false,
    };
    this.onSubjectChange = this.onSubjectChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.send = this.send.bind(this);
  }

  onSubjectChange(event) { this.setState({subject: event.target.value}); }
  onBodyChange(event) { this.setState({body: event.target.value}); }

  send() {
    this.setState({sending: true});
    const prom = new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    prom.then(this.props.next);
  }

  render() {
    return (
      <div>
        { this.state.sending ?
          <h2>Sending...</h2>
        :
          <div>
            <form onSubmit={(e) => { e.preventDefault(); }}>
              <To hiringManager={this.props.job.hiringManager} />
              <CcList ccs={this.state.ccs} />
              <Subject subject={this.state.subject} onChange={this.onSubjectChange} />
              <Body body={this.state.body} onChange={this.onBodyChange} />
            </form>
            <div style={sendStyle}>
              <button onClick={this.props.prev} className="back">Back</button>
              <button onClick={this.send}>Send</button>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Form;

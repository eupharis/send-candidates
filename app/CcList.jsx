import React from 'react';

const ccStyle = {
  marginBottom: '10px',
};

class CcList extends React.Component {
  render() {
    const ccs = this.props.ccs.map(cc => (<li key={cc}>{cc}</li>));
    return (
      <div style={ccStyle}>
        <div className="field">
          <label>Cc</label>
          <input />
        </div>
        <ul className="rlist">
          {ccs}
        </ul>
      </div>
    );
  }
}

export default CcList;

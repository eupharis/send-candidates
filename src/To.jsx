import React from 'react';

class To extends React.Component {
  render() {
    return (
      <div className="field">
        <label>To</label>
        <span>{this.props.hiringManager}</span>
      </div>
    );
  }
}

export default To;

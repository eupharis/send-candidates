import React from 'react';

export default function Subject(props) {
  return (
    <div className="field">
      <label>Subject</label>
      <input value={props.subject} onChange={props.onChange} />
    </div>
  );
}

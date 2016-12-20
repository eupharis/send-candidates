import React from 'react';

export default function Warn(props) {
  return (
    <div>
      <h2>Success</h2>
      <p>{props.candidate.name} sent to {props.job.role}!</p>
      <button onClick={props.prev} className="back">Back</button>
      <button onClick={() => (alert('todo'))}>Go to Job Profile</button>
    </div>
  );
}

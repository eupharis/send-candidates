import React from 'react';

const bodyStyle = {
  width: '100%',
  height: '480px',
  marginBottom: '20px',
};

function Body(props) {
  return <textarea style={bodyStyle} onChange={props.onChange} value={props.body} />;
}

export default Body;

import React from 'react';

const LabelField = props => {
  return (
    <>
      <label htmlFor={props.id}>{props.labelText}</label>
    </>
  );
};

export default LabelField;

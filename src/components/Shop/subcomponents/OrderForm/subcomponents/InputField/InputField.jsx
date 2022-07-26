import React from 'react';

const InputField = props => {
  return (
    <>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        className={props.class}
      />
    </>
  );
};

export default InputField;

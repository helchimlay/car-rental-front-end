const LabelText = ({ id, text, required }) => {
  return (
    <>
      <label htmlFor={id}>
        {text}
        {required && <span className='required'>*</span>}
      </label>
    </>
  );
};

export default LabelText;

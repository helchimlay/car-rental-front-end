import { useFormContext } from 'react-hook-form';

const InputRadio = ({ id, value, registerName }) => {
  const { register } = useFormContext();

  return (
    <input
      type='radio'
      id={id}
      value={value}
      {...register(`${registerName}`)}
    />
  );
};

export default InputRadio;

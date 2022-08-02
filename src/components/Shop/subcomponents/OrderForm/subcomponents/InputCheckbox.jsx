import { useFormContext } from 'react-hook-form';

const InputCheckbox = ({ id, required }) => {
  const { register } = useFormContext();

  return (
    <input type='checkbox' id={id} {...register(id, { required: required })} />
  );
};

export default InputCheckbox;

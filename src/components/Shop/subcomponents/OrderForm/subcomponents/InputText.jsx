import { useFormContext } from 'react-hook-form';

const InputText = ({ id, className, required, pattern }) => {
  const { register } = useFormContext();

  return (
    <input
      id={id}
      className={className}
      {...register(`${id}`, { required: required, pattern: pattern })}
    />
  );
};

export default InputText;

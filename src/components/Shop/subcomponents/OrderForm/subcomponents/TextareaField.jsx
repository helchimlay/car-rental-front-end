import { useFormContext } from 'react-hook-form';

const TextAreaField = ({ id }) => {
  const { register } = useFormContext();

  return <textarea {...register(id)}></textarea>;
};

export default TextAreaField;

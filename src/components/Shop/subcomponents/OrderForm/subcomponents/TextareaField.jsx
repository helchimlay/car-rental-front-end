import { useFormContext } from 'react-hook-form';

const TextAreaField = () => {
  const { register } = useFormContext();

  return <textarea {...register('ismessage')}></textarea>;
};

export default TextAreaField;

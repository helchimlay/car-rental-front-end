import { useFormContext, useWatch } from 'react-hook-form';

const InputRadio = ({ id, value, registerName }) => {
  const { register, control } = useFormContext();

  // eslint-disable-next-line no-unused-vars
  const purchaser = useWatch({
    control,
    name: 'person-option',
  });

  // eslint-disable-next-line no-unused-vars
  const paymentMethod = useWatch({
    control,
    name: 'payment-method',
  });

  // eslint-disable-next-line no-unused-vars
  const deliveryMethod = useWatch({
    control,
    name: 'delivery-method',
  });

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

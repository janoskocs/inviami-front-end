type InputProps = {
  type: string;
  label: string;
};

const Input = ({ type, label }: InputProps) => {
  return (
    <label htmlFor={label}>
      {label}
      <input type={type} id={label} />
    </label>
  );
};

export default Input;

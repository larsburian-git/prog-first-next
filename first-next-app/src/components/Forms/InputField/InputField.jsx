function InputField({ label, value, changeFunction }) {
  return (
    <label>
      {label}
      <input
        name={label}
        value={value}
        onChange={(e) => changeFunction(e.target.value)}
      />
    </label>
  );
}

export default InputField;

import { InputComponent, InputElement, Label, Error } from "./styles";
import type { InputProps } from "./types";

function Input({
  name,
  label,
  type = "text",
  id,
  placeholder,
  value,
  onChange,
  error,
}: InputProps) {
  return (
    <InputComponent>
      <Label htmlFor={id}>{label}</Label>
      <InputElement
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Error>{error}</Error>
    </InputComponent>
  );
}

export default Input;

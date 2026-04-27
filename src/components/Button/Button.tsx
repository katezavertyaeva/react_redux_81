import type { ButtonProps } from "./types";
import { MyButton } from "./styles";

function Button({ name, type = "button", onButtonClick, isDanger} : ButtonProps) {

  return (
    <MyButton type={type} onClick={onButtonClick} $isDanger={isDanger}>
      {name}
    </MyButton>
  );
}

export default Button;

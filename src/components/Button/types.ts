export interface ButtonProps {
  name: string;
  type?: "button" | "submit" | "reset";
  onButtonClick?: () => void;
  isDanger?: boolean;
}

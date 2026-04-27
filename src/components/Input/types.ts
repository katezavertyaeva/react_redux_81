import type { ChangeEvent } from "react";

export interface InputProps {
  name: string;
  label?: string;
  type?: "text" | "number" | "password" | "email";
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

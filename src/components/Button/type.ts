import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "filled" | "outline";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

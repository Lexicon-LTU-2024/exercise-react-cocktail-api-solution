import { BUTTON_VARIANT, ButtonVariant } from "../../utilities";
import "./Button.css";
import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  variant?: ButtonVariant;
}

export function Button(props: IButtonProps): ReactElement {
  const classNames = ["button"];

  if (props.className) classNames.push(props.className);
  if (props.variant === ButtonVariant.Outline) classNames.push(ButtonVariant.Outline);

  return (
    <button className={classNames.join(" ")} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

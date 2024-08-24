import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export function Button(props: IButtonProps): ReactElement {
  return (
    <button className="button" type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

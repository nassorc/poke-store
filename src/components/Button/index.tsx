import React from "react";
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> { }
export default function Button(props: ButtonProps) {
  const { children, ...buttonProps } = props;
  return <button {...buttonProps}>{children}</button>;
}

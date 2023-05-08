import React from "react";
interface HeaderButtonProps extends React.HTMLAttributes<HTMLButtonElement> { }
export default function HeaderButton(props: HeaderButtonProps) {
  const { children, ...ButtonProps } = props;
  return <button {...ButtonProps}>{children}</button>;
}

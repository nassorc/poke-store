import React from "react";

export default function DropdownItem(props) {
  const { leftIcon, rightIcon, text } = props;
  return (
    <div className="m-2 p-2 h-14 transition ease hover:bg-slate-200 rounded-lg flex justify-between items-center">
      <div className="[&>*]:mr-4">
        <span>{leftIcon}</span>
        <span className="text-lg font-light">{text}</span>
      </div>
      <div>{rightIcon}</div>
    </div>
  );
}

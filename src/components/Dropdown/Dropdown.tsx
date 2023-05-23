import React, { useState } from "react";
interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> { }
export default function Dropdown(props: DropdownProps) {
  const { show, children, ...dropdownProps } = props;
  return (
    <div
      onClick={() => {
        setShowDropdown(true);
      }}
      {...dropdownProps}
      className={`${show ? "block" : "hidden"
        } mt-8 absolute top-full right-0 w-[340px] bg-white drop-shadow-md shadow shadow-black/30 rounded-lg`}
    >
      {children}
    </div>
  );
}

import React from "react";

const btnOptions = {
  primary: "bg-theme-500 hover:bg-theme-700 text-theme-50 font-bold rounded",
  secondary: "bg-theme-50 hover:bg-theme-200 text-theme-700 font-bold rounded",
  tertiary: "bg-theme-800 hover:bg-theme-700 text-theme-100 font-bold rounded",
};

const btnSizes = {
  sm: "py-1 px-2 text-sm",
  md: "py-2 px-4 text-md",
  lg: "py-3 px-6 text-lg",
};

export interface ButtonExampleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: keyof typeof btnOptions;
  size?: keyof typeof btnSizes;
}

export default function ButtonExample({
  className,
  variant,
  size,
  ...rest
}: ButtonExampleProps) {
  return (
    <button
      className={`${btnOptions[variant ? variant : "primary"]} ${
        btnSizes[size ? size : "md"]
      } ${className}`}
      {...rest}
    />
  );
}

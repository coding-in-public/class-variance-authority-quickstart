import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  [
    "leading-none",
    "flex",
    "gap-2",
    "items-center",
    "justify-center",
    "focus:outline-none",
    "focus-visible:ring-4",
    "transition-all",
    "rounded-lg",
    "ring-theme-300",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-theme-600",
          "text-theme-50",
          "hover:bg-theme-500",
          "active:bg-theme-700",
          "focus-visible:bg-theme-600",
          "disabled:bg-theme-50",
          "disabled:bg-theme-200",
          "disabled:text-theme-400",
        ],
        outline: [
          "bg-theme-base",
          "text-theme-600",
          "border-2",
          "border-theme-600",
          "hover:bg-theme-100",
          "active:bg-theme-200",
          "disabled:bg-theme-base",
          "disabled:border-theme-200",
          "disabled:text-theme-400",
        ],
        ghost: [
          "bg-theme-base",
          "text-theme-600",
          "hover:bg-theme-50",
          "active:bg-theme-100",
          "disabled:bg-theme-base",
          "disabled:border-theme-200",
          "disabled:text-theme-400",
        ],
      },
      size: {
        sm: ["text-sm", "py-1.5", "min-h-9", "px-3"],
        md: ["text-sm", "py-2", "min-h-10", "px-5"],
        lg: ["text-md", "py-2.5", "min-h-11", "px-5"],
        xl: ["text-md", "py-3", "min-h-12", "px-6"],
      },
      btnType: {
        button: "",
        icon: ["px-0", "rounded-full"],
      },
    },
    compoundVariants: [
      { btnType: "icon", size: "sm", class: "h-10 w-10" },
      { btnType: "icon", size: "md", class: "h-11 w-11" },
      { btnType: "icon", size: "lg", class: "h-12 w-12" },
      { btnType: "icon", size: "xl", class: "h-[52px] w-[52px]" },
    ],
    defaultVariants: {
      intent: "primary",
      size: "md",
      btnType: "button",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  btnType,
  ...props
}) => (
  <button
    className={twMerge(button({ intent, size, btnType, className }))}
    {...props}
  />
);

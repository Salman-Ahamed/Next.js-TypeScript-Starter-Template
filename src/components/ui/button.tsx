import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    variant = "primary",
    size = "md",
    isLoading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    disabled,
    ...rest
  } = props;

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        {
          // Variants
          "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500": variant === "primary",
          "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500":
            variant === "secondary",
          "border border-gray-300 bg-transparent hover:bg-gray-100 focus:ring-gray-500":
            variant === "outline",
          "bg-transparent hover:bg-gray-100 focus:ring-gray-500": variant === "ghost",
          "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500": variant === "danger",
          "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500": variant === "success",

          // Sizes
          "px-3 py-1.5 text-sm": size === "sm",
          "px-4 py-2 text-base": size === "md",
          "px-6 py-3 text-lg": size === "lg",

          // Full width
          "w-full": fullWidth,
        },
        className
      )}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

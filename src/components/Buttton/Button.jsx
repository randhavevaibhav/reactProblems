import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Button = forwardRef(
  (
    {
      children,
      className,
      size,
      varient,
      onClick,
      disabled,
      onMouseOver,
      isLoading,
    },
    ref
  ) => {
    const btnSizes = {
      small: "text-xs",
      large: "text-2xl",
    };

    const btnVarients = {
      primary: `bg-blue-500 text-white`,
      secondary: `bg-black text-white`,
      danger: `bg-red-500 text-white`,
      success: `bg-green-500 text-white`,
    };
    const defaultClasses = `font-semibold border rounded-md px-2 py-1 text-black bg-gray-200 hover:brightness-[0.9] disabled:opacity-40 disabled:brightness-[1] disabled:cursor-not-allowed
    ${isLoading ? "hover:cursor-wait" : ""}
    `;

    const mergedClasses = twMerge(
      defaultClasses,
      btnSizes[size],
      btnVarients[varient]
    );
    const overrideClasses = twMerge(mergedClasses, className);
    return (
      <button
        className={overrideClasses}
        disabled={disabled}
        onClick={onClick}
        onMouseOver={onMouseOver}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

export default Button;

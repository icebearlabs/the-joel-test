import React from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export const Button = ({ onClick, children, type = "primary" }) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        classNames(
          "px-16 h-[100px] text-black text-3xl max-w-[400px]",
          {
            "bg-white rounded-[5px] border-black border-[5px] shadow-md font-semibold":
              type === "primary",
          },
          {
            "font-medium": type === "secondary",
          }
        )
      )}
    >
      {children}
    </button>
  );
};

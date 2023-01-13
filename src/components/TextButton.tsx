import React from "react";

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}

export default function TextButton({
  text,
  className,
  ...props
}: IButtonProps) {
  return (
    <button
      className={[
        "border-b pb-1 text-button font-black leading-button hover:opacity-60 active:opacity-40",
        className,
      ].join(" ")}
      {...props}
    >
      <p>{text}</p>
    </button>
  );
}
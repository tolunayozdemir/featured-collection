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
        "border-b border-white pb-1 text-small font-semibold leading-button hover:opacity-60 active:opacity-40 sm:border-black",
        className,
      ].join(" ")}
      {...props}
    >
      <p>{text}</p>
    </button>
  );
}

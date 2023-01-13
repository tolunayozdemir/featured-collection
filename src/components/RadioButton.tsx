import React from "react";

export default function RadioButton({
  color,
  name,
  defaultChecked,
}: {
  color: string;
  name: string;
  defaultChecked: boolean;
}) {
  const style = {
    borderColor: color,
    background: color,
  };

  return (
    <label className="radio" style={{ color }}>
      <input type="radio" name={name} defaultChecked={defaultChecked} />
      <div className="circle" style={style} />
    </label>
  );
}

import { StaticImage } from "gatsby-plugin-image";
import React, { useRef } from "react";
import RadioButton from "./RadioButton";
import SquareButton from "./SquareButton";

function Colors({ colors }: { colors: string[] }) {
  const name = Math.random().toString();
  return (
    <ul className="grid grid-flow-col gap-2">
      {colors.map((color, i) => (
        <li key={name + i}>
          <RadioButton color={color} name={name} defaultChecked={i === 0} />
        </li>
      ))}
    </ul>
  );
}

export default function ItemList() {
  const ref = useRef<any>();

  return (
    <div className="flex items-center">
      <ul
        ref={ref}
        className="flex-r o scrolling ml-6 flex overflow-x-auto overflow-y-hidden scroll-smooth transition-all sm:ml-12 xl:ml-30"
      >
        <li className="mr-8 flex-none">
          <StaticImage
            className="h-72 w-56 object-cover hover:cursor-pointer hover:opacity-75"
            src="../images/hoodie.png"
            alt="365 Signature Hoodie"
          />
          <div className="mt-3 text-small">
            <p>365 Signature Hoodie</p>
            <div className="mt-1 flex items-center justify-between">
              <span className="font-semibold">€33.95</span>
              <Colors colors={["#99C3CC", "#CC9999", "#CB99CC", "#A6CC99"]} />
            </div>
          </div>
        </li>
        <li className="mr-8 flex-none">
          <StaticImage
            className="h-72 w-56 object-cover hover:cursor-pointer hover:opacity-75"
            src="../images/pants.png"
            alt="Organic Skinny High Waist Pants"
          />
          <div className="mt-3 text-small">
            <p>Organic Skinny High Waist Pants</p>
            <div className="mt-1 flex items-center justify-between">
              <span className="font-semibold">€33.95</span>
              <Colors colors={["#99C3CC", "#CC9999", "#CB99CC", "#A6CC99"]} />
            </div>
          </div>
        </li>
        <li className="mr-8 flex-none">
          <StaticImage
            className="h-72 w-56 object-cover hover:cursor-pointer hover:opacity-75"
            src="../images/jeans2.png"
            alt="Organic Skinny High Waist Jeans"
          />
          <div className="mt-3 text-small">
            <p>Organic Skinny High Waist Jeans</p>
            <div className="mt-1 flex items-center justify-between">
              <span className="font-semibold">€33.95</span>
              <Colors colors={["#99C3CC", "#CC9999", "#CB99CC", "#A6CC99"]} />
            </div>
          </div>
        </li>
      </ul>
      <SquareButton
        onClick={() => {
          ref.current.scrollLeft += 35;
        }}
      />
    </div>
  );
}

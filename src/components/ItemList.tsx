import { StaticImage } from "gatsby-plugin-image";
import React, { useRef } from "react";
import RadioButton from "./RadioButton";
import SquareButton from "./SquareButton";

const items = [
  {
    name: "365 Signature Hoodie",
    price: "€33.95",
    image: "/hoodie.png",
    colors: ["#99C3CC", "#CC9999", "#CB99CC", "#A6CC99"],
  },
  {
    name: "Organic Skinny High Waist Jeans",
    price: "€33.95",
    image: "/jeans.png",
    colors: ["#99C3CC", "#CC9999", "#CB99CC", "#A6CC99"],
  },
  {
    name: "Organic Skinny High Waist Jeans 2",
    price: "€33.95",
    image: "/jeans2.png",
    colors: ["#99C3CC", "#CC9999", "#CB99CC", "#A6CC99"],
  },
];

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
        {items.map(({ name, image, price, colors }) => {
          return (
            <li key={name} className="mr-8 flex-none">
              <img
                className="h-72 w-56 object-cover hover:cursor-pointer hover:opacity-75"
                src={image}
                alt={name}
              />
              <div className="mt-3 text-small">
                <p>{name}</p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="font-semibold">{price}</span>
                  <Colors colors={colors} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <SquareButton
        onClick={() => {
          ref.current.scrollLeft += 35;
        }}
      />
    </div>
  );
}

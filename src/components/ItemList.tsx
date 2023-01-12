import { StaticImage } from "gatsby-plugin-image";
import React from "react";

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
  const uid = Math.random().toString();
  return (
    <div>
      {colors.map((color, i) => (
        <input
          key={uid + i}
          type="radio"
          value={color}
          defaultChecked={i === 0}
          name={uid}
        />
      ))}
    </div>
  );
}

export default function ItemList() {
  return (
    <ul className="flex-r o scrolling ml-6 flex overflow-x-auto overflow-y-hidden sm:ml-12 xl:ml-30">
      {items.map(({ name, image, price, colors }) => {
        return (
          <li key={name} className="mr-8 flex-none">
            <img className="h-72 w-56 object-cover" src={image} alt={name} />
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
  );
}

import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import TextButton from "../components/TextButton";
import ItemList from "../components/ItemList";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className="grid grid-cols-1 sm:min-h-screen sm:grid-cols-2">
        <StaticImage
          className="h-full object-cover"
          src="../images/life-style.png"
          alt="Life Style Image"
        />
        <div className="z-10 -mt-60 sm:mt-0">
          <div className="p-8 pl-6 sm:p-12 xl:pt-24 xl:pl-30 xl:pr-36">
            <h4 className="font-title text-titleSm font-bold leading-large text-white sm:text-title sm:leading-large sm:text-black">
              Everyday items, we have something to suit every occasion.
            </h4>
            <p className="hidden pt-3 leading-mid text-light sm:block">
              At suspendisse augue lectus arcu, accumsan ut sit posuere vitae
              sit tincidunt semper eu proin leo gravida cursus.
            </p>
            <TextButton
              text="Shop All Everyday Items"
              className="mt-8 border-white text-white  sm:text-black"
            />
          </div>
          <ItemList />
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

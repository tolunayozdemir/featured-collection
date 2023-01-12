import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../components/Button";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className="grid grid-cols-1 sm:min-h-screen sm:grid-cols-2">
        <StaticImage
          className="h-full object-cover"
          src="../images/life-style.png"
          alt="Life Style Image"
        />
        <div className="z-10 -mt-72 sm:mt-0">
          <div className="p-10 lg:pt-24 xl:pl-30 xl:pr-36">
            <h4 className="font-title text-title font-bold leading-large text-white sm:text-black">
              Everyday items, we have something to suit every occasion.
            </h4>
            <p className="hidden pt-3 leading-large text-light sm:block">
              At suspendisse augue lectus arcu, accumsan ut sit posuere vitae
              sit tincidunt semper eu proin leo gravida cursus.
            </p>
            <Button
              text="Shop All Everyday Items"
              className="mt-8 border-white text-white sm:border-black sm:text-black"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

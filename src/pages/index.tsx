import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className="grid grid-cols-1 sm:min-h-screen sm:grid-cols-2">
        <StaticImage src="../images/life-style.png" alt="Life Style Image" />
        <div className="sm:p-8 md:p-16 lg:p-30">
          <h4 className="font-title text-title font-bold">
            Everyday items, we have something to suit every occasion.
          </h4>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

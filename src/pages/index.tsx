import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:min-h-screen">
        <StaticImage src="../images/bg.png" alt="Life Style Image" />
        <div className="lg:p-30 md:p-16 sm:p-8">
          <h4>Everyday items, we have something to suit every occasion.</h4>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

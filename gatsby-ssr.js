import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link rel="preload" href="/fonts/Avenir.ttc" as="font" />,
    <link rel="preload" href="/fonts/ITCAvantGardePro-Md.otf" as="font" />,
    <link rel="preload" href="/fonts/ITCAvantGardePro-Bold.otf" as="font" />,
    <link rel="preload" href="/fonts/ITCAvantGardePro-Bk.otf" as="font" />,
    <link rel="preload" href="/fonts/ITCAvantGardePro-Demi.otf" as="font" />,
  ]);
};

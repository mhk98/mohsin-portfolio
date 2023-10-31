import React, { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Components

//= Scripts
import correctStylesheetsOrder from "@/common/correctStylesheetsOrder";
import Loader from "@/common/Loader";
import Cursor from "@/common/Cursor";
import ProgressScroll from "@/common/ProgressScroll";

const PreviewLayout = ({ children }) => {
  useEffect(() => {
    correctStylesheetsOrder({ preview: true });
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/landing-preview/css/preview-style.css" />
      </Head>

      <Loader />
      <Cursor />
      <ProgressScroll />
      {children}
    </>
  );
};

export default PreviewLayout;

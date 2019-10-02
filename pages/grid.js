import React from "react";
import Head from "next/head";
import Global from "../components/Global";
import PageHeading from "../components/Global/PageHeading";
const pageTitle = "Grid";

export default function Index() {
  return (
    <Global>
      <Head>
        <title>{`Chameleon - ${pageTitle}`}</title>
      </Head>
      <div>
        <PageHeading>{pageTitle}</PageHeading>
        <div className="wide-content">
          <div className="container">
            <h2>Grid Route</h2>
            <p>This is the Star route.</p>
          </div>
        </div>
      </div>
    </Global>
  );
}

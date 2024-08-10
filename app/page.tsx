import React from "react";
import dynamic from "next/dynamic";

type Props = {};

const LoginComponent = dynamic(() => import("../components/SignIn"), {
  ssr: false,
});

const IndexPage = (props: Props) => {
  return (
    <div>
      <LoginComponent />
    </div>
  );
};

export default IndexPage;

import React from "react";

import Header from "./Header";
import { Container } from "./styles";
type Props = {
  children?: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Container className="container">{children}</Container>
    </>
  );
};

export default React.memo(Layout);

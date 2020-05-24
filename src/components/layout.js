import React from "react";
import { Global } from "@emotion/core";
import styled from "@emotion/styled";

import globalStyles from "../styles/global";
import typeStyles from "../styles/typography";
import dimensions from "../styles/dimensions";
import Header from "./Header";

const LayoutContainer = styled.div`
  max-width: ${dimensions.maxwidthDesktop}px;
  padding-left: ${dimensions.paddingHorizontalDesktop}em;
  padding-right: ${dimensions.paddingHorizontalDesktop}em;
  padding-bottom: 2rem;
  margin: 0 auto;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: ${dimensions.paddingHorizontalTablet}em;
    padding-right: ${dimensions.paddingHorizontalTablet}em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding-left: ${dimensions.paddingHorizontalMobile}em;
    padding-right: ${dimensions.paddingHorizontalMobile}em;
  }

  .Layout__content {
    padding-bottom: 4em;
  }
`;

const Layout = ({ location, title, social, authorName, children }) => {
  return (
    <LayoutContainer>
      <Global styles={[globalStyles, typeStyles]} />
      <div className="Layout">
        <Header location={location} title={title} social={social}/>
        <main className="Layout__content">{children}</main>
        <footer>
          © {new Date().getFullYear()} {authorName} All rights
          reserved
        </footer>
      </div>
    </LayoutContainer>
  );
};

export default Layout;

import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import colors from "../styles/colors";
import dimensions from "../styles/dimensions";

const linearHeaderStyles = css`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: block;
  }
  h3 {
    font-family: Montserrat, sans-serif;
    margin: 0;
    @media (max-width: ${dimensions.maxwidthMobile}px) {
      margin-bottom: 1rem;
    }
  }
`;

const SocialContainer = styled.div`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  margin-bottom: ${props => (props.bottom ? `1.75rem` : 0)};
  a {
    box-shadow: none;
    font-style: normal;
    font-size: 1.1rem;
    font-weight: 600;
    &:hover,
    &:focus {
      color: ${colors.primary};
      text-decoration: none;
    }
    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 1rem;
    }
    &:not(:first-of-type) {
      margin-left: 2.5rem;
      @media (max-width: ${dimensions.maxwidthTablet}px) {
        margin-left: 1.75rem;
      }
      @media (max-width: ${dimensions.maxwidthMobile}px) {
        margin-left: 0.75rem;
      }
    }
  }
`;

const HeaderTitle = ({ conditions, children }) =>
  conditions ? <h1>{children}</h1> : <h3>{children}</h3>;

const LinkStyled = styled(Link)`
  box-shadow: none;
  color: ${colors.primary};
`;

const Header = ({ location, title, social }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  
  return (
    <header css={isRootPath ? null : linearHeaderStyles}>
      <HeaderTitle conditions={isRootPath}>
        <LinkStyled to={`/`}>{title}</LinkStyled>
      </HeaderTitle>
      <SocialContainer bottom={isRootPath}>
        {social.map(({ link, name }, index) => (
          <a href={link} key={index}>
            {name}
          </a>
        ))}
      </SocialContainer>
    </header>
  );
};

export default Header;

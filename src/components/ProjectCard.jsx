import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import dimensions from "../styles/dimensions";
import colors from "../styles/colors";
import PropTypes from "prop-types";

const ProjectCard = ({ category, title, description, thumbnail, link }) => (
  <ProjectCardContainer to={link}>
    <ProjectCardImageContainer className="ProjectCardImageContainer">
      <img src={thumbnail} alt={title} />
    </ProjectCardImageContainer>
    <ProjectCardContent className="ProjectCardContent">
      <ProjectCardCategory>{category}</ProjectCardCategory>
      <ProjectCardTitle>{title}</ProjectCardTitle>
      <ProjectCardBlurb>{description}</ProjectCardBlurb>
      <ProjectCardAction className="ProjectCardAction">
        Details <span>&#8594;</span>
      </ProjectCardAction>
    </ProjectCardContent>
  </ProjectCardContainer>
);

export default ProjectCard;

ProjectCard.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const ProjectCardContainer = styled(Link)`
  display: grid;
  grid-template-columns: 3.5fr 7fr;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
  margin-bottom: 2em;
  margin-top: 1.75rem;
  transition: all 150ms ease-in-out;
  text-decoration: none;
  color: currentColor;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: 1fr;
    margin-bottom: 1.5em;
  }

  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
    transition: all 150ms ease-in-out;

    .ProjectCardAction {
      color: ${colors.blue500};
      transition: all 150ms ease-in-out;

      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }

    .ProjectCardContent::before {
      opacity: 0.02;
      transition: all 150ms ease-in-out;
    }

    .ProjectCardImageContainer::before {
      opacity: 0.2;
      transition: all 150ms ease-in-out;
    }
  }
`;

const ProjectCardContent = styled("div")`
  background: white;
  padding: 2.25em 2.5em 2.25em 2.5em;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${colors.primaryLight};
    mix-blend-mode: multiply;
    opacity: 0;
    transition: all 150ms ease-in-out;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-row: 2;
    padding: 1.75em 2em 1.75em 2em;
  }
`;

const ProjectCardCategory = styled("h6")`
  font-weight: 600;
  color: ${colors.grey600};
`;

const ProjectCardTitle = styled("h3")`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`;

const ProjectCardBlurb = styled("div")`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 2em;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 1.25em;
  }
`;

const ProjectCardAction = styled("div")`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }
`;

const ProjectCardImageContainer = styled("div")`
  background: ${colors.grey200};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    max-height: 200px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${colors.primaryLight};
    mix-blend-mode: multiply;
    opacity: 0;
    transition: all 150ms ease-in-out;
  }

  img {
    max-width: 400px;
    width: 100%;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
    margin: 0;
  }
`;

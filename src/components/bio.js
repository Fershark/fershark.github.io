import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { css } from "@emotion/core";

import { rhythm } from "../utils/typography";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            shortName
          }
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: 0,
        alignItems: `center`,
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div>
        <h3
          css={css`
            margin-top: 0;
            margin-bottom: 0.5rem;
          `}
        >
          Hi, I'm {author.shortName}!
        </h3>
        <p
          css={css`
            margin: 0;
          `}
        >
          I am a software developer who is passionate about applying technology
          to solve real world problems, recently graduated from Computer and
          Information Systems Post-Baccalaureate Diploma at{" "}
          <a
            css={css`
              box-shadow: none;
              color: inherit;
              font-weight: bold;
            `}
            href="https://www.douglascollege.ca/programs-courses/catalogue/programs/PBDCIS"
          >
            Douglas College
          </a>{" "}
          in New Westminster, Canada.
        </p>
      </div>
    </div>
  );
};

export default Bio;

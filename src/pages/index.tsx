import React from "react";
import { PageProps, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectCard from "../components/ProjectCard";

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title;
  const social = data.site.siteMetadata.social;
  const authorName = data.site.siteMetadata.author.name;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle} social={social} authorName={authorName}>
      <SEO />
      <Bio />
      {posts.map(({node}, i) => (
        <ProjectCard
          key={i}
          category={node.frontmatter.date}
          title={node.frontmatter.title || node.fields.slug}
          description={node.frontmatter.description || node.excerpt}
          thumbnail={node.frontmatter.mainImage ? node.frontmatter.mainImage.publicURL : null}
          link={node.fields.slug}
        />
      ))}
    </Layout>
  );
};

type Data = {
  site: {
    siteMetadata: {
      title: string;
      author: {
        name: string;
      }
      social: {
        link: string;
        name: string;
      };
    };
  };
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string;
        frontmatter: {
          title: string;
          date: string;
          description: string;
          mainImage: {
            publicURL: string;
          }
        };
        fields: {
          slug: string;
        };
      };
    }[];
  };
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
        social {
          link
          name
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            mainImage {
              publicURL
            }
          }
        }
      }
    }
  }
`;

export default BlogIndex;
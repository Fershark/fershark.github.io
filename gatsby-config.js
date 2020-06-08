module.exports = {
  siteMetadata: {
    title: `Fernando`,
    author: {
      name: `Fernando Chavez Riquelme`,
      shortName: `Fernando`,
      summary: `I am a software developer who is passionate about applying technology
      to solve real world problems, recently graduated from Computer and
      Information Systems Post-Baccalaureate Diploma at
      <a href="https://www.douglascollege.ca/programs-courses/catalogue/programs/PBDCIS">
        Douglas College
      </a>
      in New Westminster, Canada.`
    },
    description: `Fernando's portafolio`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: [
      {
        name: `Resume`,
        link: `Fernando_Chavez Riquelme_Resume.pdf`,
      },
      {
        name: `LinkedIn`,
        link: `https://www.linkedin.com/in/ferchriquelme/`,
      },
      {
        name: `Github`,
        link: `https://github.com/Fershark`
      }
    ],
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-168827958-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fernando's Portafolio`,
        short_name: `Fernando`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2a4a7f`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

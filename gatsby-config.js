module.exports = {
  siteMetadata: {
    title: "Personal Page",
    author: "Nasyrov Ruslan",
    description: "Портфолио Front-end разработчика - Руслана Насырова"
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: '48520004',
        webvisor: true,
        trackHash: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ],
}

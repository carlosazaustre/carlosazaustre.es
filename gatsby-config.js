require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `carlosazaustre.es`,
    siteTitleAlt: `carlosazaustre.es - Formación y Desarrollo en JavaScript: Node.js, React, Vue, Firebase`,
    siteUrl: `https://carlosazaustre.es`,
    siteLanguage: `es`,
    siteDescription: `Formación y Desarrollo en JavaScript: Node.js, React, Vue, Firebase`,
    author: `@carlosazaustre`,
    social: {
      twitter: `carlosazaustre`
    }
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`
          },
          {
            title: `Sobre Mi`,
            slug: `/about`
          }
        ],
        externalLinks: [
          {
            name: "Cursos",
            url: "https://cursos.carlosazaustre.es"
          },
          {
            name: "Ebook JS",
            url: "https://leanpub.com/aprendiendo-javascript"
          },
          {
            name: "Twitter",
            url: "https://twitter.com/carlosazaustre"
          },
          {
            name: "Github",
            url: "https://github.com/carlosazaustre"
          },
          {
            name: "YouTube",
            url: "https://www.youtube.com/carlosazaustre?sub_confirmation=1"
          },
          {
            name: "Twitch",
            url: "https://twitch.tv/carlosazaustre"
          }
        ]
      }
    },
    `gatsby-plugin-theme-ui`,
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: process.env.SENTRY_DSN,
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)()
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `carlosazaustre`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `carlosazaustre.es`,
        short_name: `carlosazaustre.es`,
        description: `Formación y Desarrollo en JavaScript: Node.js, React, Vue, Firebase.`,
        start_url: `/`,
        background_color: `#FCCB0B`,
        theme_color: `#FCCB0B`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `maskable`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `maskable`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss/index.xml",
            title: "carlosazaustre.es Feed RSS",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
            // optional configuration to specify external rss feed, such as feedburner
            // link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
  ]
};

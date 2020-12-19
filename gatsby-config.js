require(`dotenv`).config({
  path: `.env`,
})

const newsletterFeed = require('./src/@lekoarts/gatsby-theme-minimal-blog/utils/newsletterFeed')

module.exports = {
  siteMetadata: {
    siteTitle: `carlosazaustre.es`,
    siteTitleAlt: `Formación y Desarrollo en JavaScript: React, Node.js, Firebase`,
    siteHeadline: `Formación y Desarrollo en JavaScript: React, Node.js, Firebase`,
    siteUrl: `https://carlosazaustre.es`,
    siteLanguage: `es`,
    siteDescription: `Formación y Desarrollo en JavaScript: React, Node.js, Firebase`,
    siteImage: `/banner.jpg`,
    author: `@carlosazaustre`,
    social: {
      twitter: `carlosazaustre`
    }
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
          }
        ]
      }
    },
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
          },
          {
            title: `Videollamada 1 a 1`,
            slug: `/videollamada`
          }
        ],
        externalLinks: [
          {
            name: "🎓 FullstackJS Academy",
            url: "https://clases.fullstack.academy"
          },
          {
            name: "YouTube",
            url: "https://www.youtube.com/carlosazaustre?sub_confirmation=1"
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
      resolve: `gatsby-plugin-feed`,
      options: newsletterFeed
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
        background_color: `#FBCF65`,
        theme_color: `#FBCF65`,
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
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ]
};

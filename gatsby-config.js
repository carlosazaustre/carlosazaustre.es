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
    author: `@carlosazaustre`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Sobre Mi`,
            slug: `/about`,
          }
        ],
        externalLinks: [
          {
            name: 'Cursos',
            url: 'https://cursos.carlosazaustre.es'
          },
          {
            name: 'Ebook JS',
            url: 'https://leanpub.com/aprendiendo-javascript'
          },
          {
            name: 'Github',
            url: 'https://github.com/carlosazaustre'
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/carlosazaustre`,
          },
          {
            name: 'YouTube',
            url: 'https://www.youtube.com/carlosazaustre?sub_confirmation=1'
          },
          {
            name: 'Twitch',
            url: 'https://twitch.tv/carlosazaustre'
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `carlosazaustre.es - Formación y Desarrollo en JavaScript: Node.js, React, Vue, Firebase`,
        short_name: `carlosazaustre.es`,
        description: `Formación y Desarrollo en JavaScript: Node.js, React, Vue, Firebase.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}

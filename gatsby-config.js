module.exports = {
  siteMetadata: {
    title: 'Sol Úbeda',
    description: 'Sol Úbeda Artist Portfolio',
    author: 'Javier López Úbeda',
    siteUrl: 'https://www.solubeda.net',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-robots-txt',
      policy: [{ userAgent: '*', allow: '/' }],
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'artwork', path: `${__dirname}/content/artwork` },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'exhibitions', path: `${__dirname}/content/exhibitions` },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'press', path: `${__dirname}/content/press` },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        plugins: ['gatsby-remark-images', 'gatsby-remark-images-medium-zoom'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-images-medium-zoom',
            options: {},
          },
        ],
      },
    },
    'gatsby-plugin-mdx-embed',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sol Úbeda',
        short_name: 'Sol Úbeda',
        start_url: '/',
        background_color: '#cc0000',
        theme_color: '#cc0000',
        display: 'fullscreen',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-47318809-2',
        head: false,
        anonymize: true,
        respectDNT: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'solubeda.net',
      },
    },
  ],
};

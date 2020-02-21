const srcDir = `${__dirname}/src`;
const dataDir = `${__dirname}/src/data`;

module.exports = {
  siteMetadata: {
    title: 'Sol Úbeda',
    description: 'Sol Úbeda Artist Portfolio',
    author: 'Javier López Úbeda',
    siteUrl: 'https://www.solubeda.net',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-robots-txt',
      policy: [{ userAgent: '*', allow: '/' }]
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'images', path: `${srcDir}/images`, },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'artwork', path: `${dataDir}/artwork`, },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'curriculum', path: `${dataDir}/curriculum`, },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'exhibitions', path: `${dataDir}/exhibitions`, },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'press', path: `${dataDir}/press`, },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Lato',
            subsets: ['latin'],
          }
        ],
      },
    },
    'gatsby-transformer-remark',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
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

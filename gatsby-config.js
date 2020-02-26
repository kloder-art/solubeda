module.exports = {
  siteMetadata: {
    title: 'Sol Úbeda',
    description: 'Sol Úbeda Artist Portfolio',
    author: 'Javier López Úbeda',
    siteUrl: 'https://www.solubeda.net',
  },
  plugins: [
    '@rhysforyou/gatsby-plugin-react-helmet-async',
    {
      resolve: 'gatsby-plugin-robots-txt',
      policy: [{ userAgent: '*', allow: '/' }],
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'artwork', path: `${__dirname}/data/artwork` },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'curriculum', path: `${__dirname}/data/curriculum` },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'exhibitions', path: `${__dirname}/data/exhibitions` },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'press', path: `${__dirname}/data/press` },
    },
    'gatsby-transformer-remark',
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
          },
        ],
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

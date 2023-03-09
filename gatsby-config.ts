import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Sol Úbeda',
    description: 'Sol Úbeda Artist Portfolio',
    author: 'Javier López Úbeda',
    siteUrl: 'https://solubeda.art',
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'artwork', path: `${__dirname}/content/artwork` },
      __key: 'artwork',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'exhibitions',
        path: `${__dirname}/content/exhibitions`,
      },
      __key: 'exhibitions',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'press', path: `${__dirname}/content/press` },
      __key: 'press',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'pages', path: './src/pages/' },
      __key: 'pages',
    },

    // {
    //   resolve: 'gatsby-plugin-mdx',
    //   options: {
    //     plugins: ['gatsby-remark-images', 'gatsby-remark-images-medium-zoom'],
    //     gatsbyRemarkPlugins: [
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           maxWidth: 1200,
    //           linkImagesToOriginal: false,
    //         },
    //       },
    //       {
    //         resolve: 'gatsby-remark-images-medium-zoom',
    //         options: {},
    //       },
    //     ],
    //   },
    // 'gatsby-plugin-mdx-embed',
    // },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
  ],
};

export default config;

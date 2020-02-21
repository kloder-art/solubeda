const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateWebpackConfig = ({
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.md$/,
          loaders: ['raw-loader'],
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: false,
          },
        },
      ],
    },
  })
}

// Taxonomies for children pages
const taxMap = {
  'press': { component: 'press-detail.js', slugPrefix: 'press/' },
  'artwork': { component: 'artwork-detail.js', slugPrefix: 'artwork/' },
  'exhibition': { component: 'exhibition-detail.js', slugPrefix: 'exhibition/' }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              type
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (Object.keys(taxMap).includes(node.frontmatter.type)) {
        const conf = taxMap[node.frontmatter.type];
        createPage({
          path: conf.slugPrefix + node.frontmatter.slug,
          component: path.resolve(`./src/templates/${conf.component}`),
          context: {
            slug: node.frontmatter.slug,
            type: node.frontmatter.type,
          },
        });
      }
    });
  });
}
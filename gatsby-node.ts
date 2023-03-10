import type { GatsbyNode } from 'gatsby';

// export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
//   actions.createSlice({
//     id: 'sidebar',
//     component: require.resolve('./src/components/Sidebar/Sidebar.tsx'),
//     context: {},
//   });
// };

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
    type PressMdx implements Node @dontInfer {
      variant: String!
      title: String!
      slug: String!
      date: Date!
      joinedAt: Mdx
    }
  `;
    createTypes(typeDefs);
  };

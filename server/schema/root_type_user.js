const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({

  })
})
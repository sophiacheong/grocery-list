const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLINT } = graphql;

const GroceryType = new GraphQLObjectType({
  name: 'GroceryType',
  fields: {
    id: { type: GraphQLID },
    label: { type: GraphQLString },
    quantity: { type: GraphQLINT },
  }
});

module.exports = GroceryType;
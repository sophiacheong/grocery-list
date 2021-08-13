const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;

const GroceryType = new GraphQLObjectType({
  name: 'Grocery',
  fields: {
    id: { type: GraphQLID },
    label: { type: GraphQLString },
    quantity: { type: GraphQLInt },
  }
});

module.exports = GroceryType;
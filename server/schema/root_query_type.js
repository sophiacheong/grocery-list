const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;
const GroceryType = require('./grocery_type');

const dbHelpers = require('../../db/dbHelpers');


const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    grocery: {
      type: GroceryType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return dbHelpers.get();
      }
    }
  }
});

module.exports = RootQueryType;
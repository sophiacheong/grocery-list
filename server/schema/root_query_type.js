const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const GroceryType = require('./grocery_type');


const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    grocery: {
      type: GroceryType,
      resolve(parentValue, args, req) {
        return req.grocery;
      }
    }
  }
});

module.exports = RootQueryType;
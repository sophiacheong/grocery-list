const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const GroceryType = require('./grocery_type');

const dbHelpers = require('../../db/dbHelpers');


const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    grocery: {
      type: GroceryType,
      resolve(parentValue, args, req) {
        return dbHelpers.get(() => console.log(results));
      }
    }
  }
});

module.exports = RootQueryType;
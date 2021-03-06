const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;
const GroceryType = require('./grocery_type');

const dbHelpers = require('../../db/dbHelpers');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addGrocery: {
      type: GroceryType,
      args: {
        label: { type: GraphQLString },
        quantity: { type: GraphQLInt }
      },
      resolve(parentValue, { label, quantity }) {
        // it doesnt return the stuff how do i fix it?
        return dbHelpers.post({label, quantity});
      }
    }
  }
});

module.exports = mutation;
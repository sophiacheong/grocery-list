const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;
const GroceryType = require('./grocery_type');

const dbHelpers = require('../../db/dbHelpers');


const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    grocery: {
      type: GroceryType,
      // args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return dbHelpers.get((err, results) => {
          if (err) console.error(err);
          else return results;
        });
      }
    }
  }
});

module.exports = RootQueryType;
'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var _require = require('apollo-server-express'),
    graphqlExpress = _require.graphqlExpress,
    graphiqlExpress = _require.graphiqlExpress;

var _require2 = require('graphql-tools'),
    makeExecutableSchema = _require2.makeExecutableSchema;

// Put together a schema


var resolvers = require('./resolvers.js');
var typeDefs = require('./schema.js');
var schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});

// Initialize the app
var app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3000, function () {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});
//# sourceMappingURL=index-graphql.js.map
import express from "express";
import { ApolloServer, gql, graphqlExpress, graphiqlExpress } from "apollo-server-express";

// import faker from "faker";
// import times from "lodash.times";
// import random from "lodash.random";

import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "./models";

import { makeExecutableSchema } from "graphql-tools";
import bodyParser from "body-parser";

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

const app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});


// const server = new ApolloServer({
//     typeDefs: gql(typeDefs),
//     resolvers,
//     context: { db }
//   });

// const app = express();
// server.applyMiddleware({ app });

// app.use(express.static("app/public"));

console.log(process.env.DATABASE_URL);

// // Start the server
// app.listen(3000, () => {
//     console.log('Go to http://localhost:3000/graphiql to run queries!');
// });

// db.sequelize.sync().then(() => {

//   // populate author table with dummy data
//   db.author.bulkCreate(
//     times(10, () => ({
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName()
//     }))
//   );
//   // populate post table with dummy data
//   db.post.bulkCreate(
//     times(10, () => ({
//       title: faker.lorem.sentence(),
//       content: faker.lorem.paragraph(),
//       authorId: random(1, 10)
//     }))
//   );

//   app.listen({ port: 4000 }, () => {
//     console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
//   });

//});

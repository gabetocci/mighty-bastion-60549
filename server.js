import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

import resolvers from "./gql/resolvers";
import typeDefs from "./gql/schema";
import db from "./models";

const server = new ApolloServer({
    typeDefs: gql(typeDefs),
    resolvers,
    context: { db }
  });

const app = express();
server.applyMiddleware({ app });
app.use(express.static("app/public"));

app.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
});

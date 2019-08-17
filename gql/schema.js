const typeDefs = `
  type Book {
    id: ID!,
    title: String,
    author: String
  }
  type Query {
    books: [Book]
  }

  type Mutation {
    createBook(title: String, author:String!): Book!
  }

`;
export default typeDefs;

//     updateBook(id: ID!, title: String, author:String!): [Int!]!
//     deleteBook(id: ID!): Int!
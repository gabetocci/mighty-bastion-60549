const typeDefs = `
  type Book {
    id: ID!,
    title: String,
    author: String
  }
  type Query {
    books: [Book]
    book: [Book]
  }

  type Mutation {
    createBook(title: String, author:String!): Book!
    updateBookAuthor(id: ID!, author:String!): Book!
    deleteBook(id: ID!): Book!
  }

`;
export default typeDefs;
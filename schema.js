// // The GraphQL schema in string form
// const typeDefs = `
//   type Query {
//     books: [Book]
//   }
//   type Book {
//     title: String,
//     author: String
//   }
// `;
// export default typeDefs;

export default `
  type Book {
    title: String,
    author: String
  }
  type Query {
    books: [Book]
  }
`;


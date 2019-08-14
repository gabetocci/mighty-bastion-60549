const resolvers = {
  // Book: {
  //   author: (parent, _args, _context, _info) => {
  //     return parent.getAuthor();
  //   }
  // },
  Query: {
    books: (_parent, _args, { db }, _info) => {
      return db.book.findAll();
    }
  }//,
  // Mutation: {
  //   createBook: (_parent, { title, author }, { db }, _info) => {
  //       return db.book.create({
  //         title: title,
  //         author: author
  //       });
  //     },
  //   updateBook: (_parent, { title, author }, { db }, _info) => {
  //       return db.book.update({
  //         title: title,
  //         author: author
  //       }, {
  //           where: {
  //             title: title
  //           }
  //         });
  //     },
  //   deletePost: (_parent, { title }, { db }, _info) => {
  //       return db.post.destroy({
  //         where: {
  //           title: title
  //         }
  //       });
  //     }
  // }
};

// // Some fake data
// const books = [
//     {
//       title: "Harry Potter and the Sorcerer's stone",
//       author: 'J.K. Rowling',
//     },
//     {
//       title: 'Jurassic Park',
//       author: 'Michael Crichton - foo',
//     },
// ];

// // The resolvers
// const resolvers = {
//     Query: {
//       books: () => books
//     },
// };

export default resolvers;

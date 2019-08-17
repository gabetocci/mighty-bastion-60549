const resolvers = {
  // Book: {
  //   author: (parent, _args, _context, _info) => {
  //     return parent.getAuthor();
  //   }
  // },
  Query: {
    books: (parent, args, { db }) => {
      return db.book.findAll();
    }
  },
  Mutation: {
    createBook: (parent, args, { db }, _info) => {
        return db.book.create({
          title: args.title,
          author: args.author
        });
    }},
    // updateBook: (_parent, { id, title, author }, { db }, _info) => {
    //     return db.book.update({
    //       title: title,
    //       author: author
    //     }, {
    //         where: {
    //           id: id
    //         }
    //     });
    // },
    // deleteBook: (_parent, { id }, { db }, _info) => {
    //     return db.book.destroy({
    //       where: {
    //         id: id
    //       }
    //     });
    // }
};

export default resolvers;

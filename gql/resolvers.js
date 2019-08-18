const resolvers = {
  // Book: {
  //   author: (parent, _args, _context, _info) => {
  //     return parent.getAuthor();
  //   }
  // },
  Query: {
    books: (parent, args, { db }) => {
        return db.book.findAll();
    },
    book: (parent, args, { db }) => {
        return db.book.findByPk(args.id)
    }
  },
  Mutation: {
    createBook: (parent, args, { db }) => {
      return db.book.create({
        title: args.title,
        author: args.author
      });
    },
    updateBookAuthor: (parent, args, { db }) => {
      return db.book.update({
        author: args.author
      }, {
        where: {
          id: args.id
        }
      });
    },
    deleteBook: (parent, args, { db }) => {
      return db.book.destroy({
        where: {
          id: args.id
        }
      });
    }
  }
};

export default resolvers;
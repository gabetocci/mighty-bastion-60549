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
    createBook (parent, args, { db }) {
      return db.book.create({
        title: args.title,
        author: args.author
      });
    },
    async updateBookAuthor (parent, args, { db }) {
      await db.book.update({
        author: args.author
      }, {
        where: {
          id: args.id
        }
      });
      return await db.book.findByPk(args.id);
    },
    async deleteBook (parent, args, { db }) {
      const deleted_book = await db.book.findByPk(args.id);
      await db.book.destroy({
        where: {
          id: args.id
        }
      });
      return deleted_book;
    }
  }
};

export default resolvers;
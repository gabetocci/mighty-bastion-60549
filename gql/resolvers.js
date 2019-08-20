const resolvers = {

  DogOwner: {
    dogs (parent, args, { db }) {
      return db.dog.findAll({
        where: { owner_id: parent.id }
      });
    }
  },

  Dog: {
    dog_owner (parent, args, { db }) {
      return parent.getDogOwner();
    },
    breed (parent, args, { db }) {
      return parent.getBreed();
    }
  },

  //
  Query: {

    // Book
    books (parent, args, { db }) {
        return db.book.findAll();
    },
    book (parent, args, { db }) {
        return db.book.findByPk(args.id)
    },

    // Dog
    dogs (parent, args, { db }) {
      return db.dog.findAll();
    },
    dog (parent, args, { db }) {
      return db.dog.findByPk(args.id)
    },

    // Dog Owner
    dog_owners (parent, args, { db }) {
      return db.dog_owner.findAll();
    },
    dog_owner (parent, args, { db }) {
      return db.dog_owner.findByPk(args.id)
    },
  },

  //
  Mutation: {

    // Book
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
    },

    // Dog
    createDog (parent, args, { db }) {
      return db.dog.create({
        name: args.name,
        age: args.age,
        owner_id: args.owner_id,
        breed_id: args.breed_id,
        address_id: args.address_id
      });
    },
    async updateDogName (parent, args, { db }) {
      await db.dog.update({
        name: args.name
      }, {
        where: {
          id: args.id
        }
      });
      return await db.breed.findByPk(args.id);
    },
    async updateDogOwner (parent, args, { db }) {
      await db.dog.update({
        owner_id: args.owner_id
      }, {
        where: {
          id: args.id
        }
      });
      return await db.breed.findByPk(args.id);
    },
    async updateBreed (parent, args, { db }) {
      await db.dog.update({
        breed_id: args.breed_id
      }, {
        where: {
          id: args.id
        }
      });
      return await db.breed.findByPk(args.id);
    },
    async deleteDog (parent, args, { db }) {
      const deleted_dog = await db.dog.findByPk(args.id);
      await db.dog.destroy({
        where: {
          id: args.id
        }
      });
      return deleted_dog;
    },

    // Dog Owner
    createDogOwner (parent, args, { db }) {
      return db.dog_owner.create({
        name: args.name,
        age: args.age,
        address_id: args.address_id
      });
    },
    async updateDogOwnerName (parent, args, { db }) {
      await db.dog_owner.update({
        name: args.name
      }, {
        where: {
          id: args.id
        }
      });
      return await db.dog_owner.findByPk(args.id);
    },
    async deleteDogOwner (parent, args, { db }) {
      const deleted_dog_owner = await db.dog_owner.findByPk(args.id);
      await db.dog_owner.destroy({
        where: {
          id: args.id
        }
      });
      return deleted_dog_owner;
    },

    // Breed
    createBreed (parent, args, { db }) {
      return db.breed.create({
        name: args.name
      });
    },
    async updateBreedName (parent, args, { db }) {
      await db.breed.update({
        name: args.name
      }, {
        where: {
          id: args.id
        }
      });
      return await db.breed.findByPk(args.id);
    },
    async deleteBreed (parent, args, { db }) {
      const deleted_breed = await db.breed.findByPk(args.id);
      await db.breed.destroy({
        where: {
          id: args.id
        }
      });
      return deleted_breed;
    },

  }
};

export default resolvers;

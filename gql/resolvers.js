const resolvers = {

  Person: {
    dogs (parent, args, { db }) {
      return parent.getDogs();
    }
  },

  Dog: {
    person (parent, args, { db }) {
      return parent.getPerson();
    },
    breed (parent, args, { db }) {
      return parent.getBreed();
    }
  },

  //
  Query: {

    // Person (Dog Owner)
    people (parent, args, { db }) {
      return db.person.findAll();
    },
    person (parent, args, { db }) {
      return db.person.findByPk(args.id)
    },

    // Dog
    dogs (parent, args, { db }) {
      return db.dog.findAll();
    },
    dog (parent, args, { db }) {
      return db.dog.findByPk(args.id)
    },

    // Breed
    breeds (parent, args, { db }) {
      return db.breed.findAll();
    },
    breed (parent, args, { db }) {
      return db.breed.findByPk(args.id)
    },

  },

  //
  Mutation: {

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
      return await db.dog.findByPk(args.id);
    },
    async updateDogPerson (parent, args, { db }) {
      await db.dog.update({
        person_id: args.person_id
      }, {
        where: {
          id: args.id
        }
      });
      return await db.dog.findByPk(args.id);
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

    // Person (Dog Owner)
    createPerson (parent, args, { db }) {
      return db.person.create({
        name: args.name,
        age: args.age,
        address_id: args.address_id
      });
    },
    async updatePersonName (parent, args, { db }) {
      await db.person.update({
        name: args.name
      }, {
        where: {
          id: args.id
        }
      });
      return await db.person.findByPk(args.id);
    },
    async deletePerson (parent, args, { db }) {
      const deleted_person = await db.person.findByPk(args.id);
      await db.person.destroy({
        where: {
          id: args.id
        }
      });
      return deleted_person;
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

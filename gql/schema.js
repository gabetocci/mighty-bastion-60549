const typeDefs = `
  type Book {
    id: ID!,
    title: String,
    author: String
  }

  type Dog {
    id: ID!,
    name: String,
    age: Int,
    owner_id: ID,
    breed_id: ID,
    address_id: ID,
    dog_owner: DogOwner,
    breed: Breed
  }

  type DogOwner {
    id: ID!,
    name: String,
    age: Int,
    address_id: ID,
    dogs: [Dog]
  }

  type Breed {
    id: ID!,
    name: String
  }

  type Query {
    books: [Book]
    book(id: ID!): Book!

    dogs: [Dog]
    dog(id: ID!): Dog!

    dog_owners: [DogOwner]
    dog_owner(id: ID!): DogOwner!

    breeds: [Breed]
    breed(id: ID!): Breed!
  }

  type Mutation {
    createBook(title: String, author: String!): Book!
    updateBookAuthor(id: ID!, author: String!): Book!
    deleteBook(id: ID!): Book!

    createDog(name: String, age: Int, owner_id: Int, breed_id: Int, address_id: Int): Dog!
    updateDogName(id: ID!, name: String): Dog!
    updateDogOwner(id: ID!, owner_id: Int!): Dog!
    updateBreed(id: ID!, breed_id: Int!): Dog!
    deleteDog(id: ID!): Dog!

    createDogOwner(name: String, age: Int, address_id: Int): DogOwner!
    updateDogOwnerName(id: ID!, name: String): DogOwner!
    deleteDogOwner(id: ID!): DogOwner!

    createBreed(name: String): Breed!
    updateBreedName(id: ID!, name: String): Breed!
    deleteBreed(id: ID!): Breed!
  }

`;
export default typeDefs;

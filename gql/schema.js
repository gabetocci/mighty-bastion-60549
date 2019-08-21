const typeDefs = `
  type Dog {
    id: ID!,
    name: String,
    age: Int,
    person_id: ID,
    breed_id: ID,
    address_id: ID,
    person: Person,
    breed: Breed
  }

  type Person {
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
    dogs: [Dog]
    dog (id: ID!): Dog!

    people: [Person]
    person (id: ID!): Person!

    breeds: [Breed]
    breed (id: ID!): Breed!
  }

  type Mutation {
    createDog(name: String, age: Int, person_id: Int, breed_id: Int, address_id: Int): Dog!
    updateDogName(id: ID!, name: String): Dog!
    updateDogPerson(id: ID!, person_id: Int!): Dog!
    updateBreed(id: ID!, breed_id: Int!): Dog!
    deleteDog(id: ID!): Dog!

    createPerson(name: String, age: Int, address_id: Int): Person!
    updatePersonName(id: ID!, name: String): Person!
    deletePerson(id: ID!): Person!

    createBreed(name: String): Breed!
    updateBreedName(id: ID!, name: String): Breed!
    deleteBreed(id: ID!): Breed!
  }

`;
export default typeDefs;

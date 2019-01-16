import { gql } from 'apollo-server-express'

export default gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    products: [Product!]!
  }

  type Product {
    _id: ID!
    name: String!
    location: String!
    price: Float!
    owner: User
  }

  input ProductInput {
    name: String!
    location: String!
    price: Float!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
    createProduct(productInput: ProductInput): Product
  }
`;

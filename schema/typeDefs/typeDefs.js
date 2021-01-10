import { gql } from "apollo-server-express";

export const typeDefs = gql`
	type Query {
		hello: String
	}

	type User {
		id: ID!
		name: String!
		email: String!
	}

	type Mutation {
		createUser(name: String!, email: String!): User!
	}
`;

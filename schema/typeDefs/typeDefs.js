import { gql } from "apollo-server-express"

export const typeDefs = gql`
	# All Queries
	type Query {
		hello: String
		users: [User!]!
	}

	#All Mutations
	type Mutation {
		createUser(name: String!, email: String!): CreateUserPayload!
		deleteUser(id: ID!): DeleteUserPayload!
	}

	# Type Definitions
	type User {
		id: ID!
		userId: String!
		name: String!
		email: String!
	}

	# Mutation Payloads
	type CreateUserPayload {
		success: Boolean
		message: String
		user: User!
	}

	type DeleteUserPayload {
		success: Boolean
		message: String
	}
`

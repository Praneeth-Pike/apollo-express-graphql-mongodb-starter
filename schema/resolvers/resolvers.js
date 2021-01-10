import { User } from "../models/User"

export const resolvers = {
	Query: {
		hello: () => "Hello world!",
	},

	Mutation: {
		createUser: (_, { name, email }) => {
			const user = new User({ name, email })
			return user.save()
		},
	},
}

import { User } from "../models/User"
import { Article } from "../models/Article"
import { createUserId } from "../../libs/createUserId"

export const resolvers = {
	Query: {
		hello: () => "Hello world!",
		users: () => User.find(),
	},

	Mutation: {
		createUser: async (_, { name, email }) => {
			try {
				const serial = await User.countDocuments()
				const userId = await createUserId(name, serial)

				console.log(`User Id: ${userId}`)

				const user = await new User({ userId, name, email })
				const response = await user.save()
				if (response) {
					return {
						success: true,
						message: "User Created Successfully!",
						user: response,
					}
				}
			} catch (error) {
				return {
					success: false,
					message: `User Creation Failed! ${error}`,
				}
			}
		},

		deleteUser: async (_, { id }) => {
			try {
				if (!id) return null
				const user = await User.findByIdAndDelete(id)
				if (user) {
					return {
						success: true,
						message: "User Deleted Successfully!",
					}
				}
			} catch (error) {
				return {
					success: false,
					message: error.message,
				}
			}
		},
	},
}

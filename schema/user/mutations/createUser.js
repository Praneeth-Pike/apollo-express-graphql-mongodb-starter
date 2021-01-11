import { User } from "../../models/User"

/**
 * Create user resolvers
 * @param {*} _
 * @param {*} param1
 */

export const createUser = async (_, { name, email }) => {
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
}

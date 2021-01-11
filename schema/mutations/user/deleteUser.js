import { User } from "../../models/User"

export const deleteUser = async (_, { id }) => {
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
}

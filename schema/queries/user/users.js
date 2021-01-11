import { User } from "../../models/User"

/**
 * Returns all users in the Database
 * that have User Model
 */

export const users = () => User.find()

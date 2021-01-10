/**
 * Creates a user ID by combining
 * 1. the first 3 letters of the username,
 * 2. the first 3 letters of date at the time of creation,
 * 3. the serial number according to the database
 *
 * @param {*} name
 * @param {*} count
 * @returns {id}
 */

export const createUserId = (name, count) => {
	const date = Date.now().toString(32)
	const serial = count + 1
	const id = name.substr(0, 3) + date.substr(0, 3) + serial
	return id.toString()
}

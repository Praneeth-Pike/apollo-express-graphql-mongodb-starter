import mongoose from "mongoose"

export const Article = mongoose.model("Article", {
	title: String,
	body: String,
	published: Boolean,
	user: {
		id: String,
		name: String,
		email: String,
	},
})

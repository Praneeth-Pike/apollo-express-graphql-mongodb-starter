require("dotenv").config()
import express from "express"
import { ApolloServer } from "apollo-server-express"
import mongoose from "mongoose"
import { User } from "./schema/types/User"
import { resolvers } from "./schema/resolvers/resolvers"
import { schema } from "./schema"

const startServer = async () => {
	const PORT = 4000

	const app = express()

	await mongoose
		.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			connectTimeoutMS: 20000,
		})
		.then(() => console.log("Connected to MongoDB"))
		.catch(err => console.log(err))

	// const server = new ApolloServer({ typeDefs: User, resolvers })
	const server = new ApolloServer({ schema })
	server.applyMiddleware({ app })

	app.listen({ port: PORT }, () =>
		console.log(
			`🚀 Server ready at http://localhost:4000${server.graphqlPath}`
		)
	)
}

startServer()

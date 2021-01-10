require("dotenv").config()
import express from "express"
import { ApolloServer } from "apollo-server-express"
import mongoose from "mongoose"
import { typeDefs } from "./schema/typeDefs/typeDefs"
import { resolvers } from "./schema/resolvers/resolvers"

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

	const server = new ApolloServer({ typeDefs, resolvers })
	server.applyMiddleware({ app })

	app.listen({ port: PORT }, () =>
		console.log(
			`🚀 Server ready at http://localhost:4000${server.graphqlPath}`
		)
	)
}

startServer()

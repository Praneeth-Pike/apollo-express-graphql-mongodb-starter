import { makeExecutableSchema } from "apollo-server-express"
import { mergeTypeDefs } from "@graphql-tools/merge"
import { merge } from "lodash"

import userMutations from "./mutations/user"
import userQueries from "./queries/user"
import { User } from "./types/User"

const resolvers = merge({}, userQueries, userMutations)

export const schema = makeExecutableSchema({
	typeDefs: mergeTypeDefs([User]),
	// typeDefs: User,
	resolvers,
})

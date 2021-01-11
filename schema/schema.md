# Schema

## Schema has Four parts:

1. Mutations (Resolver)
2. Queries (Resolver)
3. GraphQL Type Defs
4. Models (MongoDB models)

## Mutations

Mutation has sub folders with modules.
Mutation
├── Module One (Eg: User)
│ ├── CreateUser.js
│ ├── UpdateUser.js
│ ├── DeleteUser.js, etc.
└── └── Index (Merges and exports all the above)

## Queries

Queries Folder
├── Module One (Eg: User)
│ ├── getUser.js
│ ├── getAllUsers.js, etc.
└── └── Index.js (Merges and exports all the above)

## TypeDefs

typeDefs folder
├── user.js (Has all user related typeDefs)
├── auth.js (Has all auth related typeDefs)
└── .. etc

## Schema.js

The main file that

1. Merges all the resolvers using lodash merge
2. Merges all typeDefs using `mergeTypeDefs()` from `@graphql-tools/merge`
3. Combines everything and exports using

```
import { makeExecutableSchema } from "apollo-server-express"
export const schema = makeExecutableSchema({
	typeDefs: mergeTypeDefs([User, Event, Category, City, Auth]),
	resolvers,
})
```

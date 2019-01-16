import express from 'express'
import mongoose from 'mongoose'
import { ApolloServer } from 'apollo-server-express'

import typeDefs from './graphql/typeDefs/index'
import resolvers from './graphql/resolvers/index'

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const app = express();
server.applyMiddleware({ app });

mongoose
.connect('mongodb+srv://julsbenandiel:8ZrituNU7UsUfVX4@cluster0-tpjjs.mongodb.net/test?retryWrites=true', {useNewUrlParser: true})
.then(() => {
    app.listen({ port: 4000 }, () => {
        console.log(`up & running`)
    })
}).catch(err => {
    console.error(err)
})

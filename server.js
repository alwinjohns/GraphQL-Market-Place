import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import schema from './schema'
import mongoose from 'mongoose'

const db = require('./config/db')
const server = express()
const port = 4000

mongoose.connect(db.url)
const connection = mongoose.connection
connection.once('open', () => {
    console.log('connection to db using mongoose!');
})
server.use('/graphiql', graphiqlExpress({
    endpointURL: "/graphql"
}))
server.use('/graphql', bodyParser.json(), graphqlExpress({
    schema
}))
server.listen(port, () => {
    console.log(`listening on port ${port}`);
})

// server.get('/graphql', (req, res) => {
//     console.log('get');
//     res.send('<body>hi</body>')
// })

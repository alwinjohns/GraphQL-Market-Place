import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
type LowBid {
    buyerId: String,
    bidAmount: Int,
    bidId: String,
}
type Bid {
    buyerId: String,
    bidAmount: Int,
    id: String,
    projectId: String,
}
type Project {
    id: String,
    projectName: String,
    sellerId: String,
    description: String,
    bidStart: String,
    bidEnd: String,
    maxAmount: Int,
    lowestBid: LowBid,
}
type Query {
    projects: [Project],
    project(id: String): Project
    bids(projectId: String): [Bid]
    bid(projectId: String, bidId: String): Bid
}
type Mutation {
    addProject(projectName: String!, sellerId: String!, description: String, bidStart: String, bidEnd: String!, maxAmount: Int!): Project,
    deleteProject(projectId: String!): Project,
    updateProject(projectId: String!, projectName: String!): Project,
    addBid(projectId: String!, buyerId: String!, bidAmount: Int!): Bid,
    updateBid(bidId: String!, bidAmount: Int!): Bid,
    deleteBid(bidId: String!): Bid,
    findLowestBid(projectId: String!): [Bid]
}
`

const schema = makeExecutableSchema({
    typeDefs: [typeDefs],
    resolvers
})
// addMockFunctionsToSchema({schema})

export default schema

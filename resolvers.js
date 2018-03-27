import mongoose from 'mongoose'
import projectModel from './models/project.js'
import bidModel from './models/bid.js'

const resolvers = {
    Query: {
        projects: () => {
            return projectModel.find()
        },
        project: (root, { id }) => {
            return projectModel.findOne({id})
        },
        bids: (root, { projectId }) => {
            return bidModel.find({projectId})
        },
        bid: (root, { projectId, bidId }) => {
            return bidModel.findOne({id: bidId, projectId})
        }
    },
    Mutation: {
        addProject: (root, {projectName, sellerId, description, bidStart, bidEnd, maxAmount}) => {
            const project = new projectModel({projectName, sellerId, description, bidStart, bidEnd, maxAmount, lowestBid: null})
            return project.save()
        },
        deleteProject: (root, { projectId }) => {
            return projectModel.findOneAndRemove({id: projectId})
        },
        updateProject: (root, { projectId, projectName, description }) => {
            return projectModel.findOneAndUpdate({id: projectId}, {projectName, description})
        },
        addBid: (root, {projectId, buyerId, bidAmount}) => {
            const newBid = new bidModel({projectId, buyerId, bidAmount})
            return newBid.save()
        },
        updateBid: (root, { bidId, bidAmount }) => {
            return bidModel.findOneAndUpdate({id: bidId}, {bidAmount})
        },
        deleteBid: (root, { bidId }) => {
            return bidModel.findOneAndRemove({id: bidId})
        },
        findLowestBid: (root, { projectId }) => {
            return bidModel.find({projectId}).sort({bidAmount: 1}).limit(1)
        }
    }
}
export default resolvers

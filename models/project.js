import mongoose from 'mongoose'
import uuid from 'node-uuid'
const schema = mongoose.Schema

const projectSchema = new schema({
    id: {type: String, default: uuid.v1},
    projectName: String,
    sellerId: String,
    description: String,
    bidStart: String,
    bidEnd: String,
    maxAmount: Number,
    lowestBid: Object,
})

const model = mongoose.model('project', projectSchema)
export default model

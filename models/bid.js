import mongoose from 'mongoose'
import uuid from 'node-uuid'
const schema = mongoose.Schema

const bidSchema = new schema({
    id: {type: String, default: uuid.v1},
    projectId: String,
    buyerId: String,
    bidAmount: Number,
})

const model = mongoose.model('bids', bidSchema)
export default model

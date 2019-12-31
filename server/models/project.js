const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
  slug: { type: String, unique: true, sparse: true },
  title: { type: String, required: true },
  subtitle: String,
  image: String,
  description: String,
  // rating: Number,
  // what students learn
  objectives: [{ type: Schema.Types.Mixed, value: String }],
  requirements: [{ type: Schema.Types.Mixed, value: String }],
  clientContact: String,
  clientWebsite: String,
  kanbanLink: String,
  fileLink: String,
  status: {
    type: String,
    enum: ['active', 'inactive', 'canceled', 'complete'],
    default: 'active'
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  author: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Project', projectSchema)

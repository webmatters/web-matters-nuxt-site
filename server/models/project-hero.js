const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectHeroSchema = new Schema({
  project: { type: Schema.Types.ObjectId, ref: 'Project' },
  image: String,
  title: String,
  subtitle: String,
  createdAt: { type: Date, default: Date.now }
})

const ProjectHeroModel = mongoose.model('ProjectHero', projectHeroSchema)

module.exports = ProjectHeroModel

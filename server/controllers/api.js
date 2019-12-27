const passport = require('passport')
const ProjectHero = require('../models/project-hero')

exports.getPageData = function(req, res, next) {
  const data = {}
  ProjectHero.findOne()
    .sort({ createdAt: -1 })
    .populate('project')
    .exec(function(errors, projectHero) {
      if (errors) {
        return res.status(422).send(errors)
      }

      data.projectHero = projectHero
      return res.json(data)
    })
}

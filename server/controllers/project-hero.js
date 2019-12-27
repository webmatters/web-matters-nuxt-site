const ProjectHero = require('../models/project-hero')

exports.createHero = function(req, res, next) {
  const projectData = req.body

  const projectHero = new ProjectHero(projectData)
  projectHero.project = projectData.project

  projectHero.save((errors, createdHero) => {
    if (errors) {
      return res.status(422).send(errors)
    }

    return res.json(createdHero)
  })
}

exports.getProjectHeroes = function(req, res, next) {
  ProjectHero.find({})
    .populate('project')
    .sort({ createdAt: -1 })
    .exec(function(errors, heroes) {
      if (errors) {
        return res.status(422).send(errors)
      }

      return res.json(heroes)
    })
}

exports.updateProjectHeroes = function(req, res, next) {
  const id = req.params.id

  ProjectHero.findById(id)
    .populate('project')
    .exec(function(errors, hero) {
      if (errors) {
        return res.status(422).send(errors)
      }

      hero.set({ createdAt: new Date() })
      hero.save((errors, updatedHero) => {
        if (errors) {
          return res.status(422).send(errors)
        }

        return res.json(updatedHero)
      })
    })
}

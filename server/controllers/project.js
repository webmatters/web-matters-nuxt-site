const slugify = require('slugify')
const Project = require('../models/project')

exports.getProjects = function(req, res) {
  Project.find({ status: 'published' })
    .populate('author -_id -password -projects -email -role')
    .populate('category')
    .sort({ updatedAt: -1 })
    .exec((errors, projects) => {
      if (errors) {
        return res.status(422).send(errors)
      }

      return res.json(projects)
    })
}

exports.getInstructorProjects = function(req, res) {
  const userId = req.user.id

  Project.find({ author: userId })
    .populate('author')
    .sort({ updatedAt: -1 })
    .exec((errors, projects) => {
      if (errors) {
        return res.status(422).send(errors)
      }

      return res.json(projects)
    })
}

exports.getProjectById = (req, res) => {
  const id = req.params.id

  Project.findById(id)
    .populate('category')
    .exec((errors, project) => {
      if (errors) {
        return res.status(422).send(errors)
      }

      return res.json(project)
    })
}

exports.getProjectBySlug = (req, res) => {
  const slug = req.params.slug

  Project.findOne({ slug })
    .populate('author -_id -password -projects -email -role')
    .exec((errors, project) => {
      if (errors) {
        return res.status(422).send(errors)
      }

      return res.json(project)
    })
}

// Needs recheck
exports.createProject = function(req, res) {
  const projectData = req.body
  const user = req.user
  const project = new Project(projectData)
  project.author = user

  project.save((errors, createdProject) => {
    if (errors) {
      return res.status(422).send(errors)
    }

    return res.json(createdProject)
  })
}

exports.updateProject = function(req, res) {
  const projectId = req.params.id
  const projectData = req.body

  Project.findById(projectId)
    .populate('category')
    .exec((errors, project) => {
      if (errors) {
        return res.status(422).send(errors)
      }

      if (
        projectData.status &&
        projectData.status === 'published' &&
        !project.slug
      ) {
        project.slug = slugify(project.title, {
          replacement: '-', // replace spaces with replacement
          remove: null, // regex to remove characters
          lower: true // result in lower case
        })
      }

      project.set(projectData)
      project.save((errors, savedProject) => {
        if (errors) {
          return res.status(422).send(errors)
        }

        return res.json(savedProject)
      })
    })
}

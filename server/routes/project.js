const express = require('express')
const router = express.Router()

const AuthCtrl = require('../controllers/auth')
const ProjectCtrl = require('../controllers/project')

router.get('', ProjectCtrl.getProjects)
router.get(
  '/user-projects',
  AuthCtrl.onlyAuthUser,
  AuthCtrl.onlyAdmin,
  ProjectCtrl.getInstructorProjects
)
router.get('/:id', ProjectCtrl.getProjectById)
router.get('/s/:slug', ProjectCtrl.getProjectBySlug)

router.post(
  '',
  AuthCtrl.onlyAuthUser,
  AuthCtrl.onlyAdmin,
  ProjectCtrl.createProject
)
router.patch(
  '/:id',
  AuthCtrl.onlyAuthUser,
  AuthCtrl.onlyAdmin,
  ProjectCtrl.updateProject
)

module.exports = router

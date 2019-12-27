const express = require('express')
const router = express.Router()

const ProjectHeroCtrl = require('../controllers/project-hero')
const AuthCtrl = require('../controllers/auth')

router.post('', ProjectHeroCtrl.createHero)
router.get(
  '',
  AuthCtrl.onlyAuthUser,
  AuthCtrl.onlyAdmin,
  ProjectHeroCtrl.getProjectHeroes
)

router.patch(
  '/:id',
  AuthCtrl.onlyAuthUser,
  AuthCtrl.onlyAdmin,
  ProjectHeroCtrl.updateProjectHeroes
)

module.exports = router

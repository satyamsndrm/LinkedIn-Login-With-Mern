const express = require('express')
const router = express.Router()
const passport = require('../passport')

router.get('/linkedin', passport.authenticate('linkedin',))
router.get(
	'/linkedin/callback',
	passport.authenticate('linkedin', {
		failureRedirect: '/'
	}),
	(req,res)=>{
		res.redirect('/')
	}
)

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ status:true , user: req.user })
	} else {
		return res.json({status:false, user: null })
	}
})

module.exports = router

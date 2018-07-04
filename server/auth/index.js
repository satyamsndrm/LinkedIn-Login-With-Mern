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
	//console.log('===== user!!======')
	console.log('===== session!!======')
	console.log(req.session)
	console.log('===== end of session!!======')
	console.log('===== cookie!!======')
	console.log(req.cookies)
	//res.clearCookie('connect.sid');
	console.log('===== END OF COOKIES!!======')
	if (req.session.passport.user) {
		return res.json({ status:true , user: req.session.passport.user })
	} else {
		return res.json({status:false, user: null })
	}
})

module.exports = router

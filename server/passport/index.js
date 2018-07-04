const passport = require('passport')
const LinkedinStrategy = require('./linkedinstrategy')

passport.serializeUser((user, done) => {
	console.log('=== serialize ... called ===')
	//console.log(user) // the whole raw user object!
	console.log('---------')
	done(null, user )
})

passport.deserializeUser((id, done) => {
	console.log('DEserialize ... called')
	done(null, id)
})

// ==== Register Strategies ====
passport.use(LinkedinStrategy)

module.exports = passport

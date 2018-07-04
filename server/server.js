const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const session = require('express-session')
const passport = require('./passport')
const app = express()
const PORT = process.env.PORT || 3000

// ===== Middleware ====
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
app.use(
	session({
		secret: 'this is the default passphrase',
		resave: true,
		saveUninitialized: true
	})
)

app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(path.join(__dirname, '../build')))
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../build/'))
})


app.use('/auth', require('./auth'))

// ====== Error handler ====
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
})

// ==== Starting Server =====
app.listen(PORT, () => {
	console.log(`App listening on PORT: `+PORT);
})

const LinkedInStrategy= require('passport-linkedin-oauth2').Strategy;

const strategy = new LinkedInStrategy({
			clientID: '81gzpwueo5c948',
			clientSecret: 'jMkyd1JuNs83ItL8',
			callbackURL: "https://filipip.herokuapp.com/auth/linkedin/callback",
			scope: [ 'r_basicprofile', 'r_emailaddress']
		},
		function(token, tokenSecret, profile, done) {
			process.nextTick(function(){
				console.log("====Successfully=====");
				let user=profile;
				let u ={
					name:user._json.formattedName,
					email:user._json.emailAddress,
					photo:user._json.pictureUrl,
					headline:user._json.headline,
					industry:user._json.industry,
					location:user._json.location.name,
					connections:user._json.numConnections,
					publicProfileUrl:user._json.publicProfileUrl
				}
				return done(null , u);
			})
		}
		)

module.exports = strategy
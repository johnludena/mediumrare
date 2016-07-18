import {User} from './models/models.js'

const ACTIONS = {
	registerUser: function(email, password) {
		console.log('User email and pass: ', email, password)
		return User.register(email,password).then((resp)=> {
			console.log('User registration response:',resp)
			return this.logUserIn(email,password)
		})
	},

	logUserIn: function(email,password) {
		return User.login(email,password).then(function(resp){
			location.hash = "dashboard"
		})
	},

	logUserOut: function() {
		return User.logout().then(() => {
			location.hash = "login"
		})
	}
}

export default ACTIONS
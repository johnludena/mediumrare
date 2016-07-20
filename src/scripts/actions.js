import { User } from './models/models.js'

// 

const ACTIONS = {
	registerUser: function(email, password) {
		console.log('User email and pass: ', email, password)
		User.register(email, password)
		// .then((data)=>{
		// 	console.log('last thing!', data);
		// 	this.logUserIn(data.email, data.password);
		// })
	},

	logUserIn: function(email,password) {
		console.log('logging in user...', email, password)
		User.login(email,password).then(function(resp){
			console.log('route to dash???', resp)
			location.hash = "dashboard"
		})
	},

	logUserOut: function() {
		User.logout().then(() => {
			location.hash = "login"
		})
	}
}

export default ACTIONS
import {UserModel} from './models/models.js'

const ACTIONS = {
	registerUser: function(email, password) {
		console.log('ACTIONS: ', email, password)
		console.log(UserModel)
		return UserModel.register(email,password).then((resp)=> {
			console.log('res',resp)
		})
	},

	logUserIn: function(email,password) {
		return UserModel.login(email,password).then(function(resp){
			location.hash = "dashboard"
		})
	},

	logUserOut: function() {
		return UserModel.logout().then(() => {
			location.hash = "login"
		})
	}
}

export default ACTIONS
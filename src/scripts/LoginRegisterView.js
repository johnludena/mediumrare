import React from 'react'
import ACTIONS from './actions'

const LoginRegisterView = React.createClass({
	
	_handleLoginSubmit: function(e){
		e.preventDefault()
		var email = e.currentTarget.email.value
		var password = e.currentTarget.password.value

		ACTIONS.logUserIn(email,password)
	},

	_handleRegisterSubmit: function(e){
		e.preventDefault()
		var email = e.currentTarget.email.value
		var password = e.currentTarget.password.value

		ACTIONS.registerUser(email,password)
	
	},

	render: function() {
		return (
				<div className="login-register-container">
					<h1>Welcome to the login page</h1>

					<h2>Login</h2>
					<form onSubmit={this._handleLoginSubmit}>
						<input name="email" type="email" placeholder="Enter your email" />
						<input name="password" type="password" placeholder="Enter your password" />
						<button type="submit">Login</button>
					</form>

					<h2>Register</h2>
					<form onSubmit={this._handleRegisterSubmit}>
						<input name="email" type="email" placeholder="Enter your email" />
						<input name="password" type="password" placeholder="Enter your password" />
						<button type="submit">Register</button>
					</form>

				</div>
				
			)
	}
})

export default LoginRegisterView
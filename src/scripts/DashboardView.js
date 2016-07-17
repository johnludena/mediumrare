import React from 'react'
import {NavBar} from './NavBar'

const DashboardView = React.createClass({
	
	render: function() {
		return (
				<div className="login-register-container">
					<h1>Dashboard</h1>
					<NavBar />
				</div>
			)
	}
})

export default DashboardView
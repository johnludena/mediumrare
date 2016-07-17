import React from 'react'
import ACTIONS from './actions'

export const NavBar = React.createClass ({
	render: function(){
		return(
				<div className="nav">
					<a href="#dashboard">Dashboard</a>
					<a href="#allposts">All Posts</a>
					<a href="#myposts">My Posts</a>
					<a href="#compose">Compose</a>
					<a href="#" onClick={ACTIONS.logUserOut}>Logout</a>

				</div>
			)
	}
})
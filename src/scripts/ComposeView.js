import React from 'react'
import {NavBar} from './NavBar'
import {PostModel} from './models/models'
import {User} from './models/models'

const ComposeView = React.createClass({
	
	_handlePublishPost: function(){
		e.preventDefault()
		var title = e.currentTarget.title.value
		var body = e.currentTarget.body.value

		console.log('title and body entered:',title, body)

		var newPost = new PostModel({
			title: title,
			body: body,
			user: {
				email: User.getCurrentUser().email,
				_id: User.getCurrentUser()._id
			}
		})

		console.log('newPost object:',newPost)

		newPost.save()
		
	},

	render: function() {

		console.log('current user: ', User.getCurrentUser())

		return (
				<div className="login-register-container">
					<h1>Compose</h1>
					<NavBar />

					<form onSubmit={this._handlePublishPost}>
						<input name="title" className="post-title" placeholder="Enter post title" />
						<textarea name="body" className="post-body" rows="50" placeholder="Enter post description" />
						<button type="submit">Publish post</button>
					</form>

				</div>
			)
	}
})

export default ComposeView
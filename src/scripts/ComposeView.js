import React from 'react'
import {NavBar} from './NavBar'
import {PostModel} from './models/models'
import {UserModel} from './models/models'

const ComposeView = React.createClass({
	
	_handlePublishPost: function(){
		e.preventDefault()
		var title = e.currentTarget.title.value
		var body = e.currentTarget.body.value


		var newPost = new PostModel({
			title: title,
			body: body,
			user: {
				email: UserModel.getCurrentUser().email,
				_id: UserModel.getCurrentUser()._id
			}
		})

		newPost.save()
		
	},

	render: function() {

		console.log('current user: ', UserModel.getCurrentUser())

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
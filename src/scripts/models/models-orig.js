import Backbone from 'backbone'
import $ from 'jquery'
import {app_name} from '../app'


export const PostModel = Backbone.Model.extend({
    url: "/api/posts",
    // warning: behind-the-scenes magic
    // when you sync with the server, read the ._id property
    // off the returned record, and assign it into your .id
    // property
    idAttribute: "_id"
})

export const PostCollection = Backbone.Collection.extend({
    model: PostModel,
    url: "/api/posts"
})

// ..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
const User = Backbone.Model.extend({
	urlRoot: '/api/users',
	idAttribute: '_id'
})

User.register = function(email,password) {
	return $.ajax({
		type: 'post',
		url: '/auth/register',
		data: {
			email: email,
			password: password
		}
	})
}

User.login = function(email,password) {
	return $.ajax({
		type: 'post',
		url: '/auth/login',
		data: {
			email: email,
			password: password
		}
	}).then((userData) => {
		console.log('userData?', userData)
		localStorage[app_name + '_user'] = JSON.stringify(userData)
		return userData
	},(err)=> {console.log('loginError', err)})
}

User.logout = function() {
	return $.getJSON('/auth/logout').then(()=>{
		localStorage[app_name + '_user'] = null
	})
}

User.getCurrentUser = function() {
	return localStorage[app_name + '_user'] ? JSON.parse(localStorage[app_name + '_user']) : null
}


export { User }
// ..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x

// ^^ DO NOT TOUCH ^^
// but, you may ...
const myUserModel = User.extend({

})
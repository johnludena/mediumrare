import Backbone from 'backbone'
import $ from 'jquery'
import {APP_NAME} from '../app'

export const PostsCollection =  Backbone.Collection.extend({
	url: '/api/posts'
})

export const PostModel = Backbone.Model.extend({
	url: '/api/posts'
})

export const UserModel = {
	register: function(email,password) {
		return $.ajax({
			type: 'post',
			url: '/auth/register',
			data: {
				email: email,
				password: password
			}
		}).then((email,password)=>this.login(email,password))
	},
	login: function(email,password) {
		return $.ajax({
			type: 'post',
			url: '/auth/login',
			data: {
				email: email,
				password: password
			}
		}).then((userData) => {
			localStorage[APP_NAME] = JSON.stringify(userData)
		})
	},
	logout: function() {
		return $.getJSON('/auth/logout')
	},
	getCurrentUser: function() {
		return JSON.parse(localStorage[APP_NAME])
	}
}
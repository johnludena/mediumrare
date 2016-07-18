import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Backbone from 'backbone'
import {AllPostsView} from './AllPostsView'
import LoginRegisterView from './LoginRegisterView'
import DashboardView from './DashboardView'
import ComposeView from './ComposeView'
import {PostsCollection} from './models/models'
import {User} from './models/models'
import init from './init'


export const APP_NAME = 'blogplatform'

const app = function() {
	const AppRouter = Backbone.Router.extend({
		routes: {
			'login' : 'handleLoginRegister',
			'dashboard' : 'handleDashboard',
			'compose' : 'handleCompose',
			'allposts' : 'handleAllPosts',
			'myposts' : 'handleMyPosts',
			'*catchall' : 'redirectHome'
		},

		handleLoginRegister: function() {
			ReactDOM.render(<LoginRegisterView />, document.querySelector('.container'))
		},

		handleDashboard: function() {
			ReactDOM.render(<DashboardView />, document.querySelector('.container'))
		},

		handleCompose: function() {
			ReactDOM.render(<ComposeView />, document.querySelector('.container'))
		},

		handleAllPosts: function() {
			console.log('all posts view')
			var postsColl = new PostsCollection()
			postsColl.fetch()
			ReactDOM.render(<AllPostsView postsColl={postsColl} />, document.querySelector('.container'))
		},

		handleMyPosts: function() {
			console.log('my posts view')
		},

		redirectHome: function() {
			location.hash = 'login'
		},

		initialize: function() {
			this.on("route",(rtHandler)=> {
				console.log(User.getCurrentUser())
				if (!User.getCurrentUser()) {
					location.hash = "login"
				}
				else {
					if (rtHandler.toLowerCase().includes('login')) {
						location.hash = "dashboard"
					}
					window.rh = rtHandler				
				}
			})

			Backbone.history.start()
		}

	})

	new AppRouter()
}

// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()

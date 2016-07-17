import React from 'react'
import ReactDOM from 'react-dom'
// import LoginPage from './LoginPage'
import $ from 'jquery'
import Backbone from 'backbone'
import {PostsCollection} from './models/models'
import {AllPostsView} from './AllPostsView'
import LoginRegisterView from './LoginRegisterView'
import DashboardView from './DashboardView'
import ComposeView from './ComposeView'


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
			location.hash = 'dashboard'
		},

		initialize: function() {
			Backbone.history.start()
		}

	})

	new AppRouter()
}

app()
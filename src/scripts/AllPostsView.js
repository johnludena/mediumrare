import React from 'react'

export const AllPostsView = React.createClass({
	
	setInitialState: function() {
		return ({
				postsColl: this.props.postsColl
			})
	},

	componentWillMount: function() {
		this.state.postsColl.on('sync update', () => { 
			this.setState({
				postsColl: this.state.postsColl
			})
		})
		
		console.log('collection after state update', this.state.postsColl)
	},

	render: function() {
		return(
				<div>Ciao</div>
			)
	}
})
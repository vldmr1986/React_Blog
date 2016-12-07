import React, {Component} from 'react';
import { connect } from 'react-redux'; 
import { fetchPosts } from '../actions/index';
import {Link} from 'react-router';

class PostIndex extends Component {
	componentWillMount () {
		this.props.fetchPosts();
	}
	renderPosts() {
		return this.props.posts.map((post)=>{
			return <li className='list-group-item' key={post.id}>
				<Link to={`/${post.id}`}>
					<span className="pull-xs-right">{post.categories}</span>
					<strong>{post.title}</strong>
				</Link>
			</li>;
		});

	}
	render () {
		return (
			<div>
			<div className="text-xs-right">
				<Link to='new' className='btn btn-primary'>
					Add post
				</Link> 

				</div>
				<h3>Posts with routing</h3>
				<h3>
					<ul className='list-group'>
					{this.renderPosts()}
					</ul>
				</h3>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts.all
	}
}


export default connect(mapStateToProps, {fetchPosts})(PostIndex); 
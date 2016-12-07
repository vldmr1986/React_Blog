import React from 'react';
import {Route, IndexRoute} from 'react-router';
import PostsShow from './components/post_show';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/post_new.js';
import { Link } from 'react-router';

export default (
	<Route path='/' component={App} >
		<IndexRoute component={PostsIndex} />
		<Route path='new' component={PostsNew} />
		<Route path='/:id' component={PostsShow} />
	</Route>


	
	
);
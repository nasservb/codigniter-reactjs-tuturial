import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './website.css';
import Websites from './components/websites';
import Create from './components/create';
import Update from './components/update';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path='/' component={Websites} />
			<Route path='/create' component={Create} />
			<Route path='/update/:id' component={Update} />
		</div>
	</Router>,
document.getElementById('root'));

serviceWorker.unregister();
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

import App from 'page/application';
import About from 'page/about'

const store = configureStore();

ReactDOM.render(
	(
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path='/' component={App} />
					<Route exact path="/about" component={About} />
				</Switch>
			</Router>
		</Provider>
	),
	document.getElementById('root')
);

import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

require('./img/favicon.ico');
require('./img/icon-72x72.png');
require('./img/icon-96x96.png');
require('./img/icon-144x144.png');
require('./img/icon-192x192.png');

import Header from 'block/header'
import Main from 'block/main'

import style from './style.scss'
import classNames from 'classnames/bind'
const classnames = classNames.bind(style);

const store = createStore(
	applyMiddleware(logger)
);

class App extends Component {
	static displayName = '[page] application';

	render() {
		return (
			<div className={classnames("application")}>
				<Header />
				<Main />
			</div>
		);
	}
}

export default App;

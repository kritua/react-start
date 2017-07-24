import PropTypes from 'prop-types'
import React, { Component } from 'react';

import './img/favicon.ico';
import './img/icon-72x72.png';
import './img/icon-96x96.png';
import './img/icon-144x144.png';
import './img/icon-192x192.png';
import '../../index.html'

import Header from 'block/header'
import Main from 'block/main'

import style from './style.scss'
import classNames from 'classnames/bind'
const classnames = classNames.bind(style);

class App extends Component {

	static displayName = '[page] application';

	static propTypes = {
		user: PropTypes.object
	};

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

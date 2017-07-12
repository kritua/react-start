import React, { Component } from 'react';

import Logo from '../../blocks/icons/logo'
import Header from '../../blocks/header'

import style from './style.scss'
import classNames from 'classnames/bind'
const classnames = classNames.bind(style);

class App extends Component {


	render() {
		return (
			<div className={classnames("application")}>
				<Header />
				<div className={classnames("application__header")}>
					<Logo className={classnames("application__logo")} />
					<h2>Welcome to React</h2>
				</div>
				<p className={classnames("application__intro")}>
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default App;

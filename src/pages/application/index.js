import React, { Component } from 'react';

import Header from 'blocks/header'

import style from './style.scss'
import classNames from 'classnames/bind'
const classnames = classNames.bind(style);

class App extends Component {
	static displayName = '[page] application';

	render() {
		return (
			<div className={classnames("application")}>
				<Header />
			</div>
		);
	}
}

export default App;

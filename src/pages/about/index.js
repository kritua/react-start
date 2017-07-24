import React, { Component } from 'react'
import classNames from 'classnames/bind'

import Header from 'block/header'

import style from './style'
const classnames = classNames.bind(style);

class About extends Component {

	static displayName = '[page] about';

	render() {
		return (
			<div className={classnames('about')}>
				<Header />
			</div>
		)
	}
}

export default About
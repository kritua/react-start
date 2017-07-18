import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classNames from 'classnames/bind'

import PageHeaders from 'block/page-headers'
import Nav from 'block/nav'

import Logo from 'block/svg-icons/logo'

import style from './style'
const classnames = classNames.bind(style);

class Header extends Component {
	
	static displayName = '[block] header';
	
	static propTypes = {
		
	};
	
	render() {
		return (
			<div className={classnames('header')}>
				<div className={classnames("header__logo")}>
					<div className={classnames("header__button-menu")}>
						<button className={classnames("header__button", "header__button-close")} type="button" id="menu-close" />
					</div>
						<Logo logoFull={true} />
					<div className={classnames("header__button-menu")}>
						<button className={classnames("header__button", "header__button-burger")} type="button" id="menu-open" />
					</div>
				</div>
			</div>
		)
	}
}

export { Header as default, style };
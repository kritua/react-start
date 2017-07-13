import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classNames from 'classnames/bind'

import PageHeaders from 'blocks/page-headers'
import Nav from 'block/nav'

import style from './style.scss'
const classnames = classNames.bind(style);

class Header extends Component {
	
	static displayName = '[block] header';
	
	static propTypes = {
		
	};

	get elHeaderLogo() {

	}

	get elPageHeaders() {
		const props = {

		};

		return <PageHeaders {...props} />
	}
	
	render() {
		return (
			<header className="header header--index header--background header--menu-opened">
				<button className="slider slider--previous" type="button" id="header-previous" />
				<button className="slider slider--next" type="button" id="header-next" />
				<div className="header__navbar">
					<div className="header__logo">
						<div className="header__logo-img">
							<picture>
								<source media="(min-width: 700px)" srcSet="./img/logo.svg" />
								<img src="./img/logo.svg" alt="Logo" />
							</picture>
						</div>
						<div className="header__button-menu">
							<button className="header__button header__button-burger header__button--hidden" type="button" id="menu-open">
								<img src="./img/icons/icon-menu-burger.svg" width="50" height="24" />
							</button>
							<button className="header__button header__button-close" type="button" id="menu-close">
								<img src="./img/icons/icon-menu-cross.svg" width="24" height="24" />
							</button>
						</div>
					</div>
					<Nav />
					<div className="header__button-order">
						<a className="header__phone" href="tel:88007078050">8 (800) 707-80-50</a>
					</div>
				</div>
				{this.elPageHeaders}
			</header>
		)
	}
}

export { Header as default, style };
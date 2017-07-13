import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classNames from 'classnames/bind'

import style from './style'
const classnames = classNames.bind(style);

class Nav extends Component {
	
	static displayName = '[block] nav';
	
	static propTypes = {
		className: PropTypes.string
	};

	get elList() {
		const listItems = [

		];

		return (
			<ul className={classnames("header__menu-list")}>
				<li className={classnames("header__menu-item")}><a href="index.html">Главная</a></li>
				<li className={classnames("header__menu-item")}><a href="about.html">О компании</a></li>
				<li className={classnames("header__menu-item")}><a href="features.html">Преимущества</a></li>
				<li className={classnames("header__menu-item")}><a href="services.html">Услуги</a></li>
				<li className={classnames("header__menu-item")}><a href="docs.html">Документация</a></li>
				<li className={classnames("header__menu-item")}><a href="regions.html">Регионы</a></li>
				<li className={classnames("header__menu-item")}><a href="contacts.html">Контакты</a></li>
			</ul>
		)
	}
	
	render() {
		return (
			<nav className={classnames("header__menu")}>
				{this.elList}
			</nav>
		)
	}
}

export { Nav as default, style }
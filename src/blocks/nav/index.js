import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classNames from 'classnames/bind'

import style from './style'
const classnames = classNames.bind(style);

class Nav extends Component {
	
	static displayName = '[block] nav';
	
	static propTypes = {
		className: PropTypes.string,
		active   : PropTypes.bool
	};

	get elList() {
		const listItems = [
			{ href: 'index.html', text: 'Главная' },
			{ href: 'about.html', text: 'О компании'  },
			{ href: 'features.html', text: 'Преимущества' },
			{ href: 'services.html', text: 'Услуги' },
			{ href: 'contacts.html', text: 'Контакты' }
		];

		return (
			<ul className={classnames('nav__menu')}>
				{listItems.map((item, index) => {
					return <li key={index} className={classnames('nav__menu-item', { '': this.props.active })}><a href={item.href}>{item.text}</a></li>
				})} 
			</ul>
		)
	}
	
	render() {
		return (
			<nav className={classnames('nav')}>
				{this.elList}
			</nav>
		)
	}
}

export { Nav as default, style }
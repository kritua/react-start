import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classNames from 'classnames/bind'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'

import Nav from 'block/nav'

import { Logo, Phone } from 'block/svg-icons'

import style from './style'
const classnames = classNames.bind(style);

const Fade = ({ children, ...props }) => {
	const classNames = {
		enter: classnames('header__nav-enter'),
		enterActive: classnames('header__nav-enter_active'),
		exit: classnames('header__nav-exit'),
		exitActive: classnames('header__nav-exit_active'),
	};

	return (
		<CSSTransition {...props} timeout={{enter: 500, exit: 300}} classNames={classNames}>
			{children}
		</CSSTransition>
	)
};

class Header extends Component {

	static displayName = '[block] header';

	static propTypes = {
		className: PropTypes.string,
		type     : PropTypes.string,
		id       : PropTypes.string,
		onClick  : PropTypes.func,
		menuClose: PropTypes.string
	};

	state = {
		open: {}
	};

	get elBurger() {
		const props = {
			className: classnames('header__button', 'header__button_burger'),
			type        : 'button',
			id          : 'menu',
			'data-close': this.state.open['menu']
		};

		return (
			<div className={classnames('header__button-menu')} onClick={this.onOpen('menu')}>
				<button {...props} />
			</div>
		)
	}

	get elPhoneCall() {
		const props = {
			className: classnames('header__button', 'header__button_phone'),
			type     : 'button',
			id       : 'phone'
		};

		return (
			<div className={classnames('header__button-menu')} onClick={this.onOpen('phone')}>
				<Phone {...props} />
			</div>
		)
	}

	get elNav() {
		if(this.state.open.menu && !this.state.open.phone) {
			const props = {
				children: [
					{
						href: '/',
						text: 'Главная',
						icon: 'home'
					},
					{
						href: '/about',
						text: 'О компании',
						icon: 'home'
					},
					{
						href: '/features',
						text: 'Преимущества',
						icon: 'home'
					},
					{
						href: '/services',
						text: 'Услуги',
						icon: 'home'
					},
					{
						href: '/contacts',
						text: 'Контакты',
						icon: 'home'
					}
				],
				onClick  : this.onOpen('menu'),
				className: classnames('header__nav-inside')
			};

			return <Nav {...props} />
		}
	}

	get elPhone() {
		if(this.state.open.phone && !this.state.open.menu) {
			const props = {
				children: [
					{
						href: 'tel:88008009090',
						text: '8 (800) 800-90-90',
						icon: 'phone'
					},
					{
						href: 'tel:89009090900',
						text: '8 (800) 909-09-00',
						icon: 'phone'
					},
				],
				onClick  : this.onOpen('menu'),
				className: classnames('header__nav-inside'),
				menuClassName: classnames('header__nav-menu_revert')
			};

			return <Nav {...props} />
		}
	}

	get elLogo() {
		const props = {
			logoFull: true
		};

		return (
			<Link to="/" className={classnames('header__logo-wrapper')}>
				<Logo {...props} />
			</Link>
		)
	}

	get elMenu() {
		if(this.state.open.menu) {
			return (
				<Fade in={this.state.open.menu}>
					<div className={classnames('header__nav')}>
						{this.elNav}
					</div>
				</Fade>
			)
		}

		if(this.state.open.phone) {
			return (
				<Fade in={this.state.open.phone}>
					<div className={classnames('header__nav', 'header__nav_revert')}>
						{this.elPhone}
					</div>
				</Fade>
			)
		}
	}

	onOpen = (item) => (e) => {
		e.preventDefault();

		if(item === 'menu') {
			this.setState({
				open: {
					menu : !this.state.open.menu,
					phone: false
				}
			})
		} else {
			this.setState({
				open: {
					menu : false,
					phone: !this.state.open.phone
				}
			})
		}
	};

	render() {
		return (
			<header className={classnames('header')}>
				<div className={classnames('header__logo')}>
					{this.elBurger}
					{this.elLogo}
					{this.elPhoneCall}
				</div>
				{this.elMenu}
			</header>
		)
	}
}

export { Header as default, style };
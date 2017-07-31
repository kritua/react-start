import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classNames from 'classnames/bind'
import { Transition } from 'react-transition-group'
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
		open: {},
		entering: {},
		exiting: {}
	};

	get elBurger() {
		const props = {
			className: classnames('header__button', 'header__button_burger'),
			type        : 'button',
			id          : 'menu',
			'data-close': this.state.open.menu
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
			onClick  : this.onOpen('menu')
		};


		return (
			<Transition in={this.state.open.menu} timeout={{enter: 500, exit: 300}} mountOnEnter={true} unmountOnExit={true}>
				{(status) => <Nav {...props} className={classnames('header__nav', `header__${status}`)} />}
			</Transition>
		)

	}

	get elPhone() {
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
			onClick      : this.onOpen('phone'),
			menuClassName: classnames('header__nav-menu_revert')
		};

		return (
			<Transition in={this.state.open.phone} mountOnEnter={true} timeout={{enter: 500, exit: 300}} unmountOnExit={true}>
				{(status) => <Nav {...props} className={classnames('header__nav', `header__${status}`, `header__${status}_rev`)} />}
			</Transition>
		)

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
		return this.elNav
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
				{this.elNav}
				{this.elPhone}
			</header>
		)
	}
}

export { Header as default, style };
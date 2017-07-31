import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions'

import style from './style'
const classnames = classNames.bind(style);
import { Home, Phone } from 'block/svg-icons'


@connect((state) => ({
	active: state.setActive.active
}))
class Nav extends Component {

	static displayName = '[block] nav';

	static propTypes = {
		className    : PropTypes.string,
		children     : PropTypes.array.isRequired,
		menuClassName: PropTypes.string,
		active       : PropTypes.any,
		setActive    : PropTypes.func
	};

	static contextTypes = {
		store: PropTypes.object
	};

	activeItem = (item) => () => {
		this.props.dispatch(actions.setActive(item))
	};

	icons = {
		home : Home,
		phone: Phone
	};

	elIcon = (icon) => {
		if(icon) {
			const Icon = this.icons[icon];

			return <Icon className={classnames('nav__icon')}/>
		}
	};

	elLink = (item) => {
		if(item.href.includes('/')) {
			return <Link to={item.href}>{item.text}</Link>
		} else {
			return <a href={item.href}>{item.text}</a>
		}
	};

	get elList() {
		return (
			<nav className={classnames(this.props.className)} ref={(node) => { this.$nav = node }}>
				<div className={classnames('nav__menu', this.props.menuClassName)}>
					{this.props.children.map((item, index) => {
						return (
							<div key={index} onClick={this.activeItem(index)} data-active={this.props.active === index}
							     className={classnames('nav__menu-item', {'nav__menu-item_active': this.props.active === index})}>
								{this.elIcon(item.icon)}
								{this.elLink(item)}
							</div>
						)
					})}
				</div>
			</nav>
		)
	}

	render() {
		return this.elList
	}
}

export default Nav
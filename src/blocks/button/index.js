import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classNames from 'classnames/bind'

import style from './style'
const classnames = classNames.bind(style);

class Button extends Component {
	static displayName = '[block] button';

	static defaultProps = {
		tagName: 'a'
	};

	static propTypes = {
		className: PropTypes.string,
		onClick  : PropTypes.func,
		pending  : PropTypes.bool,
		href     : PropTypes.string,
		target   : PropTypes.string,
		disabled : PropTypes.bool,
		children : PropTypes.string,
		type     : PropTypes.string,
		tagName  : PropTypes.oneOf([
			'a',
			'button'
		]).isRequired
	};

	get elButton() {
		let props = {
			className     : classnames('button', this.props.className),
			'data-pending': this.props.pending,
			children      : this.props.children,
			onClick       : this.props.onClick
		};

		if(this.props.tagName === 'a') {
			props = {
				...props,
				href   : this.props.href,
				target : this.props.target
			}
		}

		if(this.props.tagName === 'button') {
			props = {
				...props,
				disabled: this.props.disabled,
				type    : this.props.type
			}
		}

		return <this.props.tagName {...props} />
	}

	render() {
		return this.elButton
	}
}

export { Button as default, style}
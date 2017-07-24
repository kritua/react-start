import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Headers extends Component {

	static displayName = '[block] headers';

	static propTypes = {
		className: PropTypes.string,
		children : PropTypes.node.isRequired,
		tagName  : PropTypes.oneOf([
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6'
		])
	};

	static defaultProps = {
		tagName: 'h1'
	};

	get elHeader() {
		const props = {
			className: this.props.className,
			children : this.props.children
		};

		return <this.props.tagName {...props} />
	}

	render() {
		return this.elHeader
	}
}

export default Headers

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classNames from 'classnames/bind'

import style from './style'
const classnames = classNames.bind(style);

class Input extends Component {

	static displayName = '[block] input';

	static defaultProps = {
		elTitle      : true,
		elDescription: true,
		elError      : true
	};

	static propTypes = {
		elTitle      : PropTypes.bool,
		elDescription: PropTypes.bool,
		elError      : PropTypes.bool,
		disabled     : PropTypes.bool,
		required     : PropTypes.bool,
		className    : PropTypes.string,
		type         : PropTypes.string.isRequired,
		name         : PropTypes.string.isRequired,
		pattern      : PropTypes.string,
		title        : PropTypes.string,
		description  : PropTypes.string,
		error        : PropTypes.string,
		onClick      : PropTypes.func,
		onChangeValue: PropTypes.func,
		onBlur       : PropTypes.func,
		customValid  : PropTypes.func,
		min          : PropTypes.number,
		max          : PropTypes.number,
		step         : PropTypes.number,
		width        : PropTypes.number,
		defaultValue : PropTypes.string,
		placeholder  : PropTypes.string
	};

	state = {
		watch      : false,
		validity   : true,
		error      : false,
		message    : null,
		customError: null
	};

	get elTitle() {
		const props = {
			className: classnames('input__title'),
			children : this.props.title
		};

		return <span {...props} />
	}


	get elInput() {
		const props = {
			className   : classnames('input__field', this.props.className),
			name        : this.props.name,
			type        : this.props.type,
			required    : this.props.required,
			placeholder : this.props.placeholder,
			onChange    : this.onChange,
			defaultValue: this.props.defaultValue,
			onInvalid   : this.onInvalid,
			onBlur      : this.onBlur,
			'data-watch': this.state.watch,
			pattern     : this.props.pattern,
			ref         : (input) => { this.input = input }
		};

		return <input {...props} />
	}

	get elError() {
		if(this.props.elError) {
			if(this.state.error && !this.state.validity) {
				const props = {
					children: this.state.message || this.state.customError,
					className: classnames('input__error')
				};

				return <span {...props} />
			}
		}
	}

	onInvalid = (e) => {
		e.preventDefault();

		if(this.state.error && !this.state.watch) {
			this.setState({
				watch      : true,
				message    : e.currentTarget.validationMessage,
				customError: e.currentTarget.validity.customError
			})
		} else {
			this.setState({
				message    : e.currentTarget.validationMessage,
				customError: e.currentTarget.validity.customError
			})
		}
	};

	onBlur = (e) => {
		this.setState({
			watch   : true,
			error   : true,
			validity: e.currentTarget.checkValidity()
		})
	};

	onChange = (e) => {
		const input = this.input || e.currentTarget;

		this.props.customValid && this.props.customValid(input);

		if(this.state.watch) {
			this.setState({
				validity: input.checkValidity()
			})
		}

		this.setState({
			value: input.value
		});

		this.props.onChangeValue && this.props.onChangeValue(input.value);
	};

	render() {
		return (
			<label className={classnames('input__label')}>
				{this.elTitle}
				{this.elInput}
				{this.elError}
			</label>
		)
	}
}

export default Input
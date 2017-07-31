import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'

import Button from 'block/button'
import Headers from 'block/headers'

import style from './style'
const classnames = classNames.bind(style);

@connect((state) => ({
	user: state.userstate
}))
class PageHeaders extends Component {
	
	static displayName = '[block] page-headers';
	
	static propTypes = {
		className: PropTypes.string,
		user     : PropTypes.object,
		children : PropTypes.string
	};

	state = {
		modal: false
	};

	get elSendRequest() {
		const props = {
			href     : "#quote",
			className: classnames('page-headers__button'),
			children : 'Отправить заявку'

		};

		return <Button {...props} />
	}

	get elGetCall() {
		const props = {
			tagName  : 'button',
			className: classnames('page-headers__button'),
			children : 'Заказать звонок',
			onClick  : this.onClick
		};

		return <Button {...props} />
	}

	get elHeader() {
		const props = {
			children : <span>Плёнки <span className={classnames('page-headers__span')}>{this.props.user.name}</span> оптом по цене завода-производителя</span>,
			tagName  : 'h1',
			className: classnames("page-headers__h1")
		};

		return <Headers {...props} />
	}

	onClick = (e) => {
		e.preventDefault();

		this.setState({
			modal: !this.state.modal
		})
	};
	
	render() {
		console.log(this.state);
		return (
			<section className={classnames("page-headers", this.props.className)}>
				<div className={classnames("page-headers__content")}>
					{this.elHeader}
					<div className={classnames('page-headers__buttons')}>
						{this.elSendRequest}
						{this.elGetCall}
					</div>
				</div>
			</section>
		)
	}
}

export { PageHeaders as default, style }
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classNames from 'classnames/bind'

import Button from 'block/button'

import style from './style'
const classnames = classNames.bind(style);

class PageHeaders extends Component {
	
	static displayName = '[block] page-headers';
	
	static propTypes = {
		className: PropTypes.string
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
			tagName: 'button',
			className: classnames('page-headers__button'),
			children: 'Заказать звонок',
			onClick: this.onClick
		};

		return <Button {...props} />
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
					<h1 className={classnames("page-headers__h1")}>Плёнки <span>ПЭТ</span> оптом <br />по цене завода-производителя</h1>
					<p className={classnames("page-headers__text")} />
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
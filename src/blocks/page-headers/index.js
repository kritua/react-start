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
	
	render() {
		return (
			<section className={classnames("page-headers", this.props.className)}>
				<div className={classnames("page-header__content")}>
					<h1 className={classnames("page-headers__h1")}>Плёнки <span>ПЭТ</span> оптом <br />по цене завода-производителя</h1>
					<p className={classnames("page-headers__text")} />
					<a href="#quote" className={classnames("standart-button")}>Отправить заявку</a><br />
					<Button />
				</div>
			</section>
		)
	}
}

export { PageHeaders as default, style }
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classNames from 'classnames/bind'

import PageHeaders from 'block/page-headers'
import style from './style'
const classnames = classNames.bind(style);

class Main extends Component {

	static displayName = '[block] main';

	static propTypes = {

	};

	render() {
		return (
			<main className={classnames("main")}>
				<section className={classnames('main__header')}>
					<div className={classnames('main__content')}>
						<PageHeaders />
					</div>
				</section>
			</main>
		)
	}
}

export default Main
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classNames from 'classnames/bind'

import PageHeaders from 'block/page-headers'
import Input from 'block/input'
import Headers from 'block/headers'
import Button from 'block/button'

import * as actions from './actions'

import style from './style'
const classnames = classNames.bind(style);

class Main extends Component {

	static displayName = '[block] main';

	static contextTypes = {
		store  : PropTypes.object
	};

	state = {
		valid  : false,
		pending: false
	};

	get elHeader() {
		const props = {
			tagName  : "h3",
			children : 'Форма заявки',
			className: classnames('main__form-header')
		};

		return <Headers {...props} />
	}

	get elNameInput() {
		const props = {
			type       : 'text',
			name       : 'name',
			title      : 'Ваше имя',
			required   : true,
			customValid: (node) => {
				node.setCustomValidity('');

				if(node.validity.valueMissing) {
					node.setCustomValidity('Заполните это поле.')
				}
			}
		};

		return <Input {...props} />
	}

	get elPhoneInput() {
		const props = {
			type       : 'tel',
			name       : 'tel',
			title      : 'Ваш телефон',
			required   : true,
			pattern    : '^(8|\\+7)(([\\s)(.-]+)?\\d{1}){10}$',
			customValid: (node) => {
				node.setCustomValidity('');

				if(node.validity.valueMissing) {
					node.setCustomValidity('Заполните это поле.')
				} else if(node.validity.patternMismatch) {
					if(!/^(8|\+7)/.test(node.value)) {
						node.setCustomValidity('Неверный регион, укажите 8 или +7');
					} else {
						node.setCustomValidity('Укажите номер в формате +7-XXX-XXX-XX-XX')
					}
				}
			}
		};

		return <Input {...props} />
	}

	get elButton() {
		const props = {
			tagName : 'button',
			type    : 'submit',
			disabled: !this.state.valid || this.state.pending,
			children: 'Отправить заявку'
		};

		return <Button {...props} />
	}

	onChangeForm = (e) => {
		const $form = e.currentTarget;
		const valid = [];

		for(let i = 0; i < $form.length; i++) {
			valid.push($form[i].validity.valid);
		}

		this.setState({
			valid: !valid.some((item) => !item)
		});
	};

	onSubmit = (e) => {
		e && e.preventDefault();

		const $form = this.form || e.currentTarget;

		if(this.state.valid && !this.state.pending) {
			const params = {};

			for(let i = 0; $form.length > i; i++) {
				const name = $form[i].name;
				const value = $form[i].value;

				switch(name) {
					case 'name':
						params[name] = value;
						break;
					case 'tel':
						value && (params[name] = value);
						break;
				}
			}
			this.context.store.dispatch(actions.sendForm(params))
		}
	};

	render() {
		return (
			<main className={classnames("main")}>
				<section className={classnames('main__header')}>
					<div className={classnames('main__content')}>
						<PageHeaders />
					</div>
				</section>
				<section className={classnames('main__form-section')}>
					<div className={classnames('main__content')}>
						<form className={classnames('main__form')} onSubmit={this.onSubmit} onChange={this.onChangeForm} ref={(form) => { this.form = form }}>
							{this.elHeader}
							{this.elNameInput}
							{this.elPhoneInput}
							{this.elButton}
						</form>
					</div>
				</section>
			</main>
		)
	}
}

export default Main
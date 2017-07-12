import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './style.scss'

class Header extends Component {
	
	static displayName = '[block] header';
	
	static propTypes = {
		
	};

	get elHeaderLogo() {

	}
	
	render() {
		return (
			<header className="header header--index header--background header--menu-opened">
				<button className="slider slider--previous" type="button" id="header-previous" />
				<button className="slider slider--next" type="button" id="header-next" />
				<div className="header__navbar">
					<div className="header__logo">
						<div className="header__logo-img">
							<picture>
								<source media="(min-width: 700px)" srcSet="./img/logo.svg" />
								<img src="./img/logo.svg" alt="Logo" />
							</picture>
						</div>
						<div className="header__button-menu">
							<button className="header__button header__button-burger header__button--hidden" type="button" id="menu-open">
								<img src="./img/icons/icon-menu-burger.svg" width="50" height="24" />
							</button>
							<button className="header__button header__button-close" type="button" id="menu-close">
								<img src="./img/icons/icon-menu-cross.svg" width="24" height="24" />
							</button>
						</div>
					</div>
					<nav className="header__menu">
						<ul className="header__menu-list">
							<li className="header__menu-item header__menu-item--active"><a href="#">Главная</a></li>
							<li className="header__menu-item"><a href="about.php">О компании</a></li>
							<li className="header__menu-item"><a href="features.php">Преимущества</a></li>
							<li className="header__menu-item"><a href="services.php">Услуги</a></li>
							<li className="header__menu-item"><a href="docs.php">Документация</a></li>
							<li className="header__menu-item"><a href="regions.php">Регионы</a></li>
							<li className="header__menu-item"><a href="contacts.php">Контакты</a></li>
							<li className="header__menu-item" />
						</ul>
					</nav>
					<div className="header__button-order">
						<a className="header__phone" href="tel:88007078050">8 (800) 707-80-50</a>
					</div>
				</div>
				<section className="page-headers">
					<div className="main-container">
						<h1 className="page-headers__h1">Перевозка <span>габаритных</span> и <span>негабаритных</span><br />грузов любой сложности</h1>
						<p className="page-headers__text" />
						<a href="#quote" className="standart-button">Отправить заявку</a><br />
						<a className="standart-button standart-button--header standart-button--index modal-window__click">Заказать звонок</a>
					</div>
				</section>
			</header>
		)
	}
}

export default Header;
import PropTypes from 'prop-types'
import React, { Component, createFactory } from 'react'

import favicon from './img/favicon.ico'
import icon72 from './img/icon-72x72.png'
import icon96 from './img/icon-96x96.png'
import icon144 from './img/icon-144x144.png'
import icon192 from './img/icon-192x192.png'

class Html extends Component {

	static displayName = '[page] html';
	
	static propTypes = {
		
	};

	render() {
		return (
			<html lang='en'>
				<head>
					<meta charSet='utf-8'/>
					<meta name='viewport' content='width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'/>

					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta name='apple-mobile-web-app-status-bar-style' content='black' />
					<meta name='format-detection' content='telephone=no'/>
					
					<link rel='icon' sizes='16x16' href={favicon} />
					<link rel='icon' sizes='72x72' href={icon72} />
					<link rel='icon' sizes='96x96' href={icon96} />
					<link rel='icon' sizes='144x144' href={icon144} />
					<link rel='icon' sizes='192x192' href={icon192} />

					<link rel='stylesheet' href='/css/style.css' />
					
				</head>
				<body>
					<div id='root' />
					<script src='/bundle.js' />
				</body>
			</html>
		)
	}
}

export default createFactory(Html)
import React from 'react'
import ReactDOM from 'react-dom/server'

import HtmlComponent from 'page/html'

export default async function (req, res) {
	let html = ReactDOM.renderToStaticMarkup(HtmlComponent());

	res.send(`<!DOCTYPE html>${html}`);
}
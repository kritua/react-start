import 'babel-polyfill'
import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import HTMLComponent from '../src/pages/html'

const app = express();

app.use((req, res) => {
	res.end(ReactDOM.renderToStaticMarkup(HTMLComponent));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server listening on: ${PORT}`);
});
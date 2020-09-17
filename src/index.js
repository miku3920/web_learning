import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Component from './app.component';

ReactDOM.render(
	<Component msg="請點選下方按紐。" />,
	document.getElementById('msg'),
);

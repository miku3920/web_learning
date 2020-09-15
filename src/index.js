import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Component from './app.component';

ReactDOM.render(
	<Component title="MyTitle Component" content="this is MyItem Component." />,
	document.getElementById('msg'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyComponent from './App';

ReactDOM.render(
	<MyComponent content="這是 content 的內容值。" />,
	document.getElementById('msg'),
);

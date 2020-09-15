import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Mycomponent({ content }) {
	return <p>{content}</p>;
}
Mycomponent.displayName = 'my component';
Mycomponent.propTypes = {
	content: PropTypes.string.isRequired,
};
export default Mycomponent;

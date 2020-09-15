import React from 'react';
import PropTypes from 'prop-types';

function Title({ title }) {
	return (
		<h2>{title}</h2>
	);
}
Title.displayName = 'title';
Title.propTypes = {
	title: PropTypes.string.isRequired,
};
export default Title;

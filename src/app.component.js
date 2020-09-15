import React from 'react';
import PropTypes from 'prop-types';
import Title from './app.title';
import Item from './app.item';

function Component({ title, content }) {
	return (
		<div>
			<Title title={title} />
			<Item content={content} />
		</div>
	);
}
Component.displayName = 'component';
Component.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};
export default Component;

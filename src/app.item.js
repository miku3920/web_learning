import React from 'react';
import PropTypes from 'prop-types';

function Item({ content }) {
	return (
		<p>{content}</p>
	);
}
Item.displayName = 'item';
Item.propTypes = {
	content: PropTypes.string.isRequired,
};
export default Item;

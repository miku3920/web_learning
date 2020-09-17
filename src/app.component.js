import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

function Component({ msg }, dispatch) {
	const handleOnClick = useCallback(() => {
		alert('已點選！');
	}, []);
	return (
		<div>
			<p>{msg}</p>
			<input type="button" value="click" onClick={handleOnClick} />
		</div>
	);
}
Component.displayName = 'component';
Component.propTypes = {
	msg: PropTypes.string.isRequired,
};
export default Component;

import React from 'react';

export const Cart = ({ titulo }) => {
	return (
		<div>
			<h1 className="mt-4" style={{ color: '#fab43d' }}>
				- {titulo} -
			</h1>
		</div>
	);
};

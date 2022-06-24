import { useEffect, useState } from 'react';

export const useFirestore = (asyncFn, dependencies = []) => {
	const [producto, setProducto] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();

	useEffect(() => {
		setLoading(true);

		asyncFn()
			.then((res) => {
				setProducto(res);
			})
			.catch((error) => {
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, dependencies);

	return {
		loading,
		producto,
		error,
	};
};

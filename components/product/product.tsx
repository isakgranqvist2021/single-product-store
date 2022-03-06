import { useEffect, useRef, useState } from 'react';

import { SHOPIFY_OPTIONS } from '../../constants';

import { Styled } from './product.styled';
import { ProductProps } from './product.types';

export const Product = (props: ProductProps) => {
	const { ui, productId } = props;

	const productRef = useRef<HTMLDivElement>(null);

	const [hasRendered, setHasRendered] = useState(false);

	const renderProduct = () => {
		if (!ui || hasRendered) return;

		ui.createComponent('product', {
			id: productId,
			node: productRef.current,
			options: SHOPIFY_OPTIONS,
			moneyFormat: '%7B%7Bamount_no_decimals%7D%7D%20kr',
		});

		setHasRendered(true);
	};

	useEffect(renderProduct, [ui]);

	if (!ui) return <p>Loading...</p>;

	return <Styled.Product ref={productRef} />;
};

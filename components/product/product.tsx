import { useCallback, useEffect, useRef, useState } from 'react';

import { SHOPIFY_OPTIONS } from '../../constants';

import { Styled } from './product.styled';
import { ProductProps } from './product.types';

export const Product = (props: ProductProps) => {
	const { ui, productId } = props;

	const productRef = useCallback(
		(node: HTMLDivElement | null) => {
			if (!ui || !node) return;

			node.innerHTML = '';

			ui.createComponent('product', {
				node,
				id: productId,
				options: SHOPIFY_OPTIONS,
				moneyFormat: '%7B%7Bamount_no_decimals%7D%7D%20kr',
			});
		},
		[ui]
	);

	return <Styled.Product ref={productRef} />;
};

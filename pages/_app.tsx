import type { AppProps } from 'next/app';
import Script from 'next/script';
import { useEffect } from 'react';

import { SHOPIFY_OPTIONS } from '../constants';

declare global {
	interface Window {
		ShopifyBuy: any;
	}
}

const App = (props: AppProps) => {
	const { Component, pageProps } = props;

	const onScriptLoad = () => {
		if (!window || !window.ShopifyBuy) {
			window.setTimeout(() => onScriptLoad, 3000);
			return;
		}

		const renderProduct = async () => {
			const client = window.ShopifyBuy.buildClient({
				domain: 'isakgranqvist-com.myshopify.com',
				storefrontAccessToken: 'a1f5c107e6797e805b7af6a1a5e10820',
			});

			const ui = await window.ShopifyBuy.UI.onReady(client);

			ui.createComponent('product', {
				id: '7593553985788',
				options: SHOPIFY_OPTIONS,
				moneyFormat: '%7B%7Bamount_no_decimals%7D%7D%20kr',
				node: document.getElementById('product-component-1646581305335'),
			});
		};

		renderProduct();
	};

	useEffect(onScriptLoad, []);

	return (
		<div>
			<Script
				strategy='beforeInteractive'
				src='https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
				async></Script>
			<Component {...pageProps} />
		</div>
	);
};

export default App;

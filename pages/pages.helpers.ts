import { useState, useEffect } from 'react';

declare global {
	interface Window {
		ShopifyBuy: any;
	}
}

export const useOnLoad = () => {
	const [ui, setUi] = useState<any>(undefined);

	const onScriptLoad = async () => {
		if (!window || !window.ShopifyBuy) {
			return window.setTimeout(() => onScriptLoad, 3000);
		}

		const client = window.ShopifyBuy.buildClient({
			domain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN,
			storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STORE_ACCESS_TOKEN,
		});

		const ui = await window.ShopifyBuy.UI.onReady(client);

		setUi(ui);
	};

	useEffect(() => {
		onScriptLoad();
	}, []);

	return { ui };
};

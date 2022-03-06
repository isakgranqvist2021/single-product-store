import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { PAGE_SETTINGS } from '../constants';

import { GlobalStyle, Styled } from '../styled';

const App = (props: AppProps) => {
	const { Component, pageProps } = props;

	return (
		<div>
			<Script
				strategy='beforeInteractive'
				src='https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
				async></Script>
			<GlobalStyle />

			<Head>
				<link rel='shortcut icon' href={PAGE_SETTINGS.favicon_url} />
			</Head>

			<Styled.Main>
				<Component {...pageProps} />
			</Styled.Main>
		</div>
	);
};

export default App;
